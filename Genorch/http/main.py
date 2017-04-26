# In The Name Of God
# ========================================
# [] File Name : main.py
#
# [] Creation Date : 27-04-2017
#
# [] Created By : Parham Alvani (parham.alvani@gmail.com)
# =======================================
from .route import app
from gevent.wsgi import WSGIServer

import logging

logger = logging.getLogger('Genorch.wsgi')

ip = '0.0.0.0'
port = 8080
http_server = WSGIServer((ip, port), application=app, log=logger)


def main():
    print(' * HTTP at %s:%d' % (ip, port))
    http_server.serve_forever()


def die():
    print(' > HTTP Die')
    http_server.stop()
