import click
import json
import os
import re

CONFIG_NAME = "gluestick.config"
DEFAULT_CONFIG = """
GLUESTICK_OUTPUT_FORMAT=csv
"""

def config_exists():
    if not os.path.isfile(CONFIG_NAME):
        raise click.UsageError(click.style('Oops! No gluestick.config file is present. Have you ran gluestick install in this directory?', fg='red'))


def create_default_config():
    write_file(CONFIG_NAME, DEFAULT_CONFIG)


def update_config(content):
    # Remove whitespace
    content = re.sub(r'[^\S\r\n]+', '', content)
    # TODO: Avoid overwriting old config
    write_file(CONFIG_NAME, content)


def write_file(filename, data):
    fh = open(filename, "w")
    try:
        fh.write(data)
    finally:
        fh.close()
