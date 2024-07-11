import io
import pickle

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import requests
from flask import Flask, jsonify, request, send_file


class EnfermedadesDF:
    def __init__(self, dataframe):
        self.df = dataframe

    def search_by_name(self, name):
       
        return self.df[self.df['Disease'].str.contains(name, case=False, na=False)][['Disease', 'Description']]

    def get_all(self):
       
        return self.df['Disease'].unique()

    def select_number_of_diseases(self, names, number):
       
        filtered_df = self.df[self.df['Disease'].isin(names)]
        return filtered_df[['Disease', 'Recommendations']].head(number)

    def filter_diseases(self, **filters):
        
        filtered_df = self.df.copy()
        for key, value in filters.items():
            if key in filtered_df.columns:
                filtered_df = filtered_df[filtered_df[key] == value]
        return filtered_df[['Disease', 'Recommendations']]

    def get_recommendations(self):
        return self.df[['Disease', 'Recommendations']]


def obtener_temperatura(localidad, api_key):
    parameters = {'key': api_key, 'place_id': localidad}
    url = "https://www.meteosource.com/api/v1/free/point"

    try:
        response = requests.get(url, params=parameters)
        response.raise_for_status()
        data = response.json()

        if 'current' in data and 'temperature' in data['current']:
            temperatura = data['current']['temperature']
            return temperatura
        else:
            raise ValueError("Estructura inesperada de respuesta de API")

    except requests.exceptions.RequestException as e:
        print("Error en la solicitud de la API:", e)
        return None
    except ValueError as ve:
        print(ve)
        return None

def mapear_clima(temperatura):
    if temperatura > 25:
        return 'calido'
    elif 20 < temperatura <= 25:
        return 'tropical'
    elif 15 < temperatura <= 20:
        return 'templado'
    elif 5 < temperatura <= 15:
        return 'frio'
    else:
        return 'desertico'

def buscar_enfermedades_por_clima(clima, df):
    resultados = df[df['weather'] == clima]
    return resultados[['Disease', 'Fever', 'Cough', 'Fatigue', 'Difficulty Breathing']]


