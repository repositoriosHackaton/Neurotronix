import os

import pandas as pd
import pytesseract
from flask import Flask, jsonify, request
from PIL import Image
from PyPDF2 import PdfReader

app = Flask(__name__)

# Configurar pytesseract 
pytesseract.pytesseract.tesseract_cmd = r".\Tesseract-OCR\tesseract.exe"

# Ruta del Excel 
excel_file = 'Results.xlsx'

# Crear el archivo Excel si no existe
if not os.path.exists(excel_file):
    df = pd.DataFrame(columns=['id', 'content'])
    df.to_excel(excel_file, index=False)

def extract_text(filepath):
    _, ext = os.path.splitext(filepath)
    if ext.lower() in ['.jpg', '.jpeg', '.png']:
        image = Image.open(filepath)
        text = pytesseract.image_to_string(image)
    elif ext.lower() == '.pdf':
        text = ''
        with open(filepath, 'rb') as f:
            pdf = PdfReader(f)
            for page_num in range(len(pdf.pages)):
                page = pdf.pages[page_num]
                text += page.extract_text()
    else:
        raise ValueError(f'Unsupported file format: {ext}')
    
    return text

def store_text(text):
    df = pd.read_excel(excel_file)
    new_id = len(df) + 1
    new_row = pd.DataFrame({'id': [new_id], 'content': [text]})
    df = pd.concat([df, new_row], ignore_index=True)
    df.to_excel(excel_file, index=False)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    filename = os.path.join('uploads', file.filename)
    file.save(filename)
    
    # Procesar el archivo con tesseract OCR o PyPDF2
    try:
        text = extract_text(filename)
        store_text(text)
        return jsonify({'text': text})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
