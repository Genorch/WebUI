#!/usr/bin/env python3

from Genorch.http.main import main as main_http
from Genorch.http.main import die as die_http

if __name__ == '__main__':
    try:
        main_http()
    except KeyboardInterrupt:
        die_http()
