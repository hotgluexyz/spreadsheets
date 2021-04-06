import click
import json

from . import util


@click.group()
def main():
    """
    This CLI allows for configuring, installing, and deploying the gluestick API.
    To learn more, read the docs: https://docs.gluestick.xyz
    """
    pass


@main.command()
def install():
    """
    Create the gluestick.json configuration in this directory
    """
    util.create_default_config()
    click.echo(click.style('The default gluestick API configuration has been created.', fg='green'))


@main.group()
def config():
    """
    Configure the gluestick-api
    """
    # Verify that gluestick.json exists
    if not util.config_exists():
        raise click.UsageError(click.style('Oops! No gluestick.json file is present. Have you ran gluestick install in this directory?', fg='red'))

    pass


def target_args(ctx, param, target_name):
    if target_name == "s3":
        bucket = click.prompt("What S3 bucket do you want to use?")
        aws_access_key_id = click.prompt("What is your AWS Access Key Id?")
        aws_secret_access_key = click.prompt("What is your AWS Secret Access Key?", hide_input=True, confirmation_prompt=True)

        return (target_name, bucket, aws_access_key_id, aws_secret_access_key)


@config.command()
@click.option("--dest", prompt="Where do you want final data to go?", type=click.Choice(['s3', 'Cloud Storage'], case_sensitive=False), callback=target_args)
def target(dest):
    """
    Configure the target destination for final data
    """
    target_name = dest[0]
    click.echo("Using target {}".format(target_name))

    if target_name == "s3":
        target_config = {
            "target": "s3",
            "bucket": dest[1],
            "aws_access_key_id": dest[2],
            "aws_secret_access_key": dest[3]
        }

        util.update_config("target", target_config)
        click.echo(click.style('Configuration saved', fg='green'))
