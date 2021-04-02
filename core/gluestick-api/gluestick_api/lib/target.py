import logging
import sys
import os
import subprocess

from datetime import datetime
from lib import exec

logger = logging.getLogger("gluestick-api")


def export(user, target):
    """
    Exports mapped data to configured target
    """
    # TODO: Check if target configured

    # Copy data to location specified by target
    logger.debug(f"Exporting data to {tenant}/{target}")

    # Build working_dir for this target
    # TODO: Get dir from environ not all_dirs
    working_dir = f"{all_dirs['local_root']}/targets/{target}"
    util.del_exists(working_dir)
    os.makedirs(working_dir)

    # Update config input_path
    target_config['input_path'] = f"{all_dirs['local_etl_output']}"

    # Format the path_prefix
    target_path = target_config.get("path_prefix", "")
    target_config['path_prefix'] = target_path.format(user=user, date=datetime.now().strftime('%Y%m'))

    # Write the config
    util.write_json_file(f"{working_dir}/config.json", target_config)

    # Get the driver_name (parse the target name)
    driver_name = target.split(":")[0]

    # Run the command
    try:
        cmd = f"source /home/envs/{driver_name}/bin/activate && {'target-' + driver_name} --config config.json"
        logger.info(f"Running Subprocess: [ {cmd} ] with path [ {sys.path} ]")

        exec.exec_process(cmd, working_dir, log_prefix="hotglue.export")
    except subprocess.SubprocessError as spe:
        logger.error(f"Subprocess Failed: {spe}")
        raise spe
