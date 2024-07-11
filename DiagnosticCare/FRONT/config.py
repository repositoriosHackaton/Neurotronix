import os

class Config:
    SECRET_KEY = 'c14185c4e52b73'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///your-database.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
