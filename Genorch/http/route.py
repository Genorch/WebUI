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
