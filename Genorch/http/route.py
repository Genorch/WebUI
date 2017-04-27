# In The Name Of God
# ========================================
# [] File Name : route.py
#
# [] Creation Date : 27-04-2017
#
# [] Created By : Parham Alvani (parham.alvani@gmail.com)
# =======================================
import flask

from . import app

# About


@app.route('/about')
def about_handler():
    return "Genorch"

# UI


@app.route('/<path:path>', methods=['GET'])
def ui_handler(path):
    return flask.send_from_directory('UI/dist', path)


@app.route('/', methods=['GET'])
def root_handler():
    return flask.send_file('UI/dist/index.html')

# Core


@app.route('/handler', methods=['POST'])
def handler_handler():
    data = flask.request.data.decode('ASCII')
    print(data)


@app.route('/stml', methods=['POST'])
def stml_handler():
    data = flask.request.data.decode('ASCII')
    print(data)


@app.route('/alt', methods=['POST'])
def alt_handler():
    data = flask.request.data.decode('ASCII')
    print(data)
