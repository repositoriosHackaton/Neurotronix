# Diagnostic Care 

Diagnostic Care es un proyecto innovador diseñado para ofrecer diagnósticos médicos basados en los síntomas presentados por el usuario y el clima de su ubicación. Esta herramienta utiliza inteligencia artificial para analizar los síntomas ingresados por el usuario y proporcionar posibles diagnósticos de enfermedades. Además, cuenta con un chatbot integrado que permite a los usuarios realizar preguntas sobre los resultados obtenidos, obtener más información sobre las condiciones diagnosticadas y recibir recomendaciones básicas de salud. El objetivo principal de Diagnostic Care es proporcionar a los usuarios acceso rápido y conveniente a información médica confiable, ayudándolos a tomar decisiones informadas sobre su salud.


## Arquitectura del proyecto

La arquitectura del proyecto se compone de cuatro componentes principales:
- **Front-End**: Interfaz de usuario desarrollada con HTML, CSS y JavaScript.
- **Back-End**: API desarrollada con Flask en Python que maneja las solicitudes del usuario, procesa los datos y devuelve los diagnósticos.
- **Base de Datos**: Almacena los datos de síntomas y enfermedades necesarios para el diagnóstico.
- **API Clima**: Se conecta a una API de clima externa para obtener las condiciones climáticas locales del usuario.


### Fuente del dataset
- Dataset de síntomas y enfermedades obtenido de [Kaggle](https://www.kaggle.com/)) y datos meteorológicos de [OpenWeatherMap](https://openweathermap.org/).
- Se realizó la normalización y estandarización de los datos de síntomas y enfermedades, y la eliminación de registros incompletos.
- Se implementaron mecanismos para manejar entradas inválidas del usuario y errores de conexión con la API de datos meteorológicos.

### Modelo de Machine Learning 
- Se utilizó un modelo de Random Forest para la clasificación de enfermedades basado en síntomas y condiciones climáticas.
- Precisión del modelo: 77%
- Recall del modelo: 77%
  

### Métricas de evaluación del modelo
- Precisión (Accuracy)
- Recall
- F1 Score

## Funcionalidades extra

### Implementación de chatbot
- **Tecnología/Herramientas usadas**: Python, Flask, Rasa
- **Limpieza de datos**: Se utilizó procesamiento de lenguaje natural (PLN) para limpiar y normalizar los datos de texto.
- **Manejo de excepciones y control de errores**: Implementación de manejo de excepciones para entradas no reconocidas y fallos en la API.
- **Modelo de Machine Learning utilizado**: Modelo de clasificación de intenciones con Rasa NLU.
- **Estadísticos**:
  - Precisión del modelo de clasificación de intenciones: 92%
  - Recall del modelo de clasificación de intenciones: 90%

### Integración del proyecto en una página web
- **Tecnología/Herramientas usadas**: HTML, CSS, JavaScript, Flask
