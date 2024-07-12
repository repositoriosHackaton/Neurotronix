document.addEventListener("DOMContentLoaded", function () {
  // Obtener los síntomas del servidor
  fetch("/getsymptoms")
    .then((response) => response.json())
    .then((data) => {
      const dropdownOptions = document.getElementById("dropdown-options");
      data.forEach((symptom) => {
        const option = document.createElement("div");
        option.classList.add("dropdown-option");
        option.dataset.english = symptom.english;
        option.textContent = symptom.spanish;
        option.onclick = function () {
          selectSymptom(this);
        };
        dropdownOptions.appendChild(option);
      });
    })
    .catch((error) => console.error("Error al obtener los síntomas:", error));

  // Función para seleccionar un síntoma
  function selectSymptom(option) {
    const selectedSymptoms = document.getElementById("selected-symptoms");
    const span = document.createElement("span");
    span.classList.add("selected-symptom");
    span.dataset.english = option.dataset.english;
    span.textContent = option.textContent;
    selectedSymptoms.appendChild(span);
  }

  // Función para diagnosticar
  document.querySelector("#diagnose-btn").onclick = function () {
    const selectedSymptoms =
      document.getElementsByClassName("selected-symptom");
    const symptomsList = [];
    for (let symptom of selectedSymptoms) {
      symptomsList.push(symptom.dataset.english);
    }

    fetch("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptoms: symptomsList }),
    })
      .then((response) => response.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `data:image/png;base64,${data.image}`;
        const bloque = document.querySelector(".container");
        bloque.appendChild(img);

        const resultsDiv = document.createElement("div");
        resultsDiv.classList.add('disen');
        resultsDiv.innerHTML = data.table;
        bloque.appendChild(resultsDiv);
      })
      .catch((error) => console.error("Error al diagnosticar:", error));
  };
});
