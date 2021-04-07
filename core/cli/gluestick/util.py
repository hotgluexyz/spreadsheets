import json
import os
import re

CONFIG_NAME = "gluestick.config"
DEFAULT_CONFIG = """
GLUESTICK_OUTPUT_FORMAT=csv
"""

def config_exists():
    return os.path.isfile(CONFIG_NAME)


def create_default_config():
    write_file(CONFIG_NAME, DEFAULT_CONFIG)


def update_config(content):
    # Remove whitespace
    content = re.sub(r'[^\S\r\n]+', '', content)
    write_file(CONFIG_NAME, content)


def write_file(filename, data):
    fh = open(filename, "w")
    try:
        fh.write(data)
    finally:
        fh.close()
