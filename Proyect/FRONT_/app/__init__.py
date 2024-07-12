from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    from .routes import index, analysis, catalog, information
    app.register_blueprint(index.bp)
    app.register_blueprint(analysis.bp)
    app.register_blueprint(catalog.bp)
    app.register_blueprint(information.bp)

    return app
