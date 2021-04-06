import json
import os

CONFIG_NAME = "gluestick.json"

def config_exists():
    return os.path.isfile(CONFIG_NAME)


def create_default_config():
    write_json_file(CONFIG_NAME, {})


def update_config(type, content):
    config = read_json_file(CONFIG_NAME)
    config[type] = content
    write_json_file(CONFIG_NAME, config)


def read_json_file(filename):
    # read file
    with open(f"{filename}", 'r') as filetoread:
        data = filetoread.read()

    # parse file
    content = json.loads(data)

    return content


def write_json_file(filename, content):
    with open(filename, 'w') as f:
        json.dump(content, f, indent=4)
