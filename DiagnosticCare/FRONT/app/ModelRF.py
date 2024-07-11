import pickle

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split

df = pd.read_csv("./DiagnosticCare/Dataset/Diseases_Training.csv")
print(df.head())
df1 = df.drop(["Unnamed: 133"],axis=1)

sintomas = df1.drop('prognosis',axis=1)
target = df1['prognosis']

x_train, x_test, y_train, y_test = train_test_split(sintomas, target, test_size=0.20, random_state=101)

model = RandomForestClassifier()
model.fit(x_train,y_train)

pred_model = model.predict(x_test)

print(classification_report(y_test,pred_model))

df_test = pd.read_csv("./DiagnosticCare/Dataset/Diseases_Testing.csv")
sintomas_2 = df_test.drop('prognosis', axis=1)
pred_model2 = model.predict(sintomas_2)
target_2 = df_test['prognosis']
print(classification_report(target_2,pred_model2))

with open('./DiagnosticCare/diagnostic_model.pkl', 'wb') as f:
    pickle.dump(model, f)