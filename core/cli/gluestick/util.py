import click
import json
import os

CONFIG_NAME = "gluestick.config"
DEFAULT_CONFIG = {
    'target': {
        'GLUESTICK_TARGET_FORMAT': 'csv'
    }
}

def config_exists():
    if not os.path.isfile(CONFIG_NAME):
        raise click.UsageError(click.style('Oops! No gluestick.config file is present. Have you ran gluestick install in this directory?', fg='red'))


def create_default_config():
    # Write the default config
    write_config(CONFIG_NAME, DEFAULT_CONFIG)


def read_config():
    # Read the config
    config = {
        'target': {},
        'webhook': {}
    }
    
    with open(CONFIG_NAME, "r") as f:
        for line in f.readlines():
            key, value = line.split('=')
            
            if key.startswith('GLUESTICK_TARGET'):
                config['target'][key] = value.rstrip()
            elif key.startswith('GLUESTICK_WEBHOOK'):
                config['webhook'][key] = value.rstrip()

    return config


def update_config(category, content):
    # Get current config
    config = read_config()

    # Update specified category
    config[category] = content

    # Write the data
    write_config(CONFIG_NAME, config)


def write_config(filename, config):
    # Write the config
    with open(CONFIG_NAME, "w") as f:
        for category in config:
            for key in config[category]:
                f.write(f"{key}={config[category][key]}\n")

