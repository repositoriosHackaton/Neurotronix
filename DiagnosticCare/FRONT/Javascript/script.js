//Creando el nav reponsive
const menu = document.querySelector('.nav__menu');
const nvopen = document.querySelector('#menu-abrir');
const nvclose = document.querySelector('#menu-cerrar');

function navOpenClose() {
    menu.classList.toggle('nav__menu-visible');
}

nvopen.addEventListener('click', navOpenClose);
nvclose.addEventListener('click', navOpenClose);

const selectedSymptoms = [];

function toggleDropdown() {
    document.getElementById('dropdown-options').classList.toggle('active');
}

function selectSymptom(symptom) {
    if (!selectedSymptoms.includes(symptom)) {
        selectedSymptoms.push(symptom);
        updateSelectedSymptoms();
        document.getElementById('option-' + symptom).style.display = 'none';
    }
}

function removeSymptom(symptom) {
    const index = selectedSymptoms.indexOf(symptom);
    if (index !== -1) {
        selectedSymptoms.splice(index, 1);
        updateSelectedSymptoms();
        document.getElementById('option-' + symptom).style.display = 'block';
    }
}

function updateSelectedSymptoms() {
    const symptomsList = document.getElementById('symptoms-list');
    symptomsList.innerHTML = '';
    selectedSymptoms.forEach(symptom => {
        const symptomElement = document.createElement('span');
        symptomElement.classList.add('selected-option');
        symptomElement.textContent = symptom;
        
        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = 'x';
        closeBtn.onclick = () => removeSymptom(symptom);
        
        symptomElement.appendChild(closeBtn);
        symptomsList.appendChild(symptomElement);
    });
    
    document.getElementById('dropdown-options').classList.remove('active');
}

function diagnose() {
    alert('Diagnosticando: ' + selectedSymptoms.join(', '));
    // agregar la lógica para el diagnóstico
}



// seccion de arrastrar archivos

const dropArea = document.querySelector('.drop-area__content');
const dropText = dropArea.querySelector('h2');
const dropButton = dropArea.querySelector('button');
const dropInput = dropArea.querySelector('#input-file');
let files;

dropButton.addEventListener('click', (e) => {
    dropInput.click();
});

dropInput.addEventListener('change', (e) => {
    files = e.target.files;
    dropArea.classList.add('active');
    showFiles(files);
    dropArea.classList.remove('active');
});

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('active');
    dropText.textContent = 'Suelta para subir los archivos';
});

dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.classList.remove('active');
    dropText.textContent = 'Arrastra y suelta imágenes';
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    dropArea.classList.remove('active');
    dropText.textContent = 'Arrastra y suelta imágenes';
});

function showFiles(files) {
    if (files.length === undefined) {
        processFile(files);
    } else {
        for (const file of files) {
            processFile(file);
        }
    }
}

function processFile(file) {
    const docType = file.type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (validExtensions.includes(docType)) {
        // archivo válido
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;

        fileReader.addEventListener('load', (e) => {
            const fileUrl = fileReader.result;
            const image = `
            <div id="${id}" class="file-container">
                <img src="${fileUrl}" alt="${file.name}" width="50px">
                <div class="status">
                    <span>${file.name}</span>
                    <span class="status-text">
                        Loading...
                    </span>
                </div>
            </div>`;
            const html = document.querySelector('#drop-area-container__preview').innerHTML;
            document.querySelector('#drop-area-container__preview').innerHTML = image + html;
        });
        fileReader.readAsDataURL(file);
        uploadFile(file, id);
    } else {
        // archivo inválido
        alert('Este es un archivo inválido');
    }
}

//guia para el lado del server
async function uploadFile(file, id) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        //debes poner el link del server o host
        const response = await fetch("aqui va el link del server o host", {
            method: "POST",
            body: formData,
        });

        const responseText = await response.text();
        console.log(responseText);

        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="success">Archivo subido correctamente...</span>`;
    } catch (error) {
        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="failure">El archivo no pudo subirse...</span>`;
    }
}


// async function uploadFile(file, id) {
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//         const response = await fetch("http://localhost:3000/upload", {
//             method: "POST",
//             body: formData,
//         });

//         const responseText = await response.text();
//         console.log(responseText);

//         document.querySelector(`#${id} .status-text`).innerHTML = `<span class="success">Archivo subido correctamente...</span>`;
//     } catch (error) {
//         document.querySelector(`#${id} .status-text`).innerHTML = `<span class="failure">El archivo no pudo subirse...</span>`;
//     }
// }

