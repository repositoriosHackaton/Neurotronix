from flask import Blueprint, render_template

bp = Blueprint('index', __name__)

@bp.route('/')
def index():
    return render_template('Index.html')

@bp.route('/analysis')
def analysis():
    return render_template('Analisis.html')

@bp.route('/catalog')
def catalog():
    return render_template('Catalogo.html')

@bp.route('/information')
def information():
    return render_template('Informacion.html')

@bp.route('/basico')
def information():
    return render_template('Basico.html')

@bp.route('/profundo')
def information():
    return render_template('Profundo.html')

