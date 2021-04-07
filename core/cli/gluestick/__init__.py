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
        raise click.UsageError(click.style('Oops! No gluestick.config file is present. Have you ran gluestick install in this directory?', fg='red'))

    pass


def target_args(ctx, param, target_name):
    # TODO: Add support for google cloud storage

    if target_name == "s3":
        # Handle prompts for S3 data
        bucket = click.prompt("What S3 bucket do you want to use?")
        path_prefix = click.prompt("What path prefix do you want files to be uploaded under?", default="uploads/{user}")
        aws_access_key_id = click.prompt("What is your AWS Access Key Id?")
        aws_secret_access_key = click.prompt("What is your AWS Secret Access Key?", hide_input=True, confirmation_prompt=True)

        return (target_name, bucket, path_prefix, aws_access_key_id, aws_secret_access_key)


@config.command()
@click.option("--format", prompt="What format do you want final data in?", type=click.Choice(['json', 'csv'], case_sensitive=False))
@click.option("--dest", prompt="Where do you want final data to go?", type=click.Choice(['s3'], case_sensitive=False), callback=target_args)
def target(format, dest):
    """
    Configure the target destination for final data
    """
    target_name = dest[0]
    click.echo("Using target {}".format(target_name))

    if target_name == "s3":
        target_config = f"""
        GLUESTICK_OUTPUT_FORMAT={format}
        GLUESTICK_TARGET=s3
        GLUESTICK_TARGET_BUCKET={dest[1]}
        GLUESTICK_TARGET_PATH_PREFIX={dest[2]}
        GLUESTICK_TARGET_AWS_ACCESS_KEY_ID={dest[3]}
        GLUESTICK_TARGET_AWS_SECRET_ACCESS_KEY={dest[4]}
        """

        # Update the gluestick config
        util.update_config(target_config)
        click.echo(click.style('Configuration saved', fg='green'))


@config.command()
@click.option("--url", prompt="What endpoint is your listener on?")
@click.option("--secret")
def webhook(url, secret):
    """
    Configure a webhook endpoint to receive updates on user imports
    """
    config = f"GLUESTICK_WEBHOOK_URL={url}"

    if secret is not None:
        config += f"\nGLUESTICK_WEBHOOK_SECRET={secret}"

    # Update the gluestick config
    util.update_config(config)
    click.echo(click.style('Configuration saved', fg='green'))
