# Diagnostic Care 

Diagnostic Care es un proyecto innovador diseñado para ofrecer diagnósticos médicos basados en los síntomas presentados por el usuario y el clima de su ubicación. Esta herramienta utiliza inteligencia artificial para analizar los síntomas ingresados por el usuario y proporcionar posibles diagnósticos de enfermedades. Además, cuenta con un chatbot integrado que permite a los usuarios realizar preguntas sobre los resultados obtenidos, obtener más información sobre las condiciones diagnosticadas y recibir recomendaciones básicas de salud. El objetivo principal de Diagnostic Care es proporcionar a los usuarios acceso rápido y conveniente a información médica confiable, ayudándolos a tomar decisiones informadas sobre su salud.

![image](https://github.com/user-attachments/assets/a5d76607-e5b4-43e6-9522-b4e4455c2998)


## Arquitectura del proyecto

La arquitectura del proyecto se compone de cuatro componentes principales:
- **Front-End**: Interfaz de usuario desarrollada con HTML, CSS y JavaScript.
- **Back-End**: API desarrollada con Flask en Python que maneja las solicitudes del usuario, procesa los datos y devuelve los diagnósticos.
- **Base de Datos**: Almacena los datos de síntomas y enfermedades necesarios para el diagnóstico.
- **API Clima**: Se conecta a una API de clima externa para obtener las condiciones climáticas locales del usuario.


### Fuente del dataset
- Dataset de síntomas y enfermedades obtenido de [Kaggle](https://www.kaggle.com/) y datos meteorológicos de [Meteosource](https://www.meteosource.com/api/v1/free/point).
  
  ![image](https://github.com/user-attachments/assets/64546aff-56e1-40ca-a3e1-062976f78e2d)

- Se realizó la normalización y estandarización de los datos de síntomas y enfermedades, y la eliminación de registros incompletos.
- Se implementaron mecanismos para manejar entradas inválidas del usuario y errores de conexión con la API de datos meteorológicos.

### Modelo de Machine Learning 
- Se utilizó un modelo de Random Forest para la clasificación de enfermedades basado en síntomas y condiciones climáticas.
- Precisión del modelo: 98%
- Recall del modelo: 99%
  

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
- **Tecnología/Herramientas usadas**: HTML, CSS, Bootstrap JavaScript, Flask
  
![image](https://github.com/user-attachments/assets/92fc71bc-e1ea-4ba8-a079-8a7da17300a6)

  
