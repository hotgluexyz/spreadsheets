import os
import json
import pandas as pd
import shutil

from lib import util

def establish_dirs():
    """
    Establish any necessary directories
    """
    # Establish directories
    data_dir = os.environ.get("GLUESTICK_DATA_DIR", "/tmp/gluestick/data")
    os.makedirs(data_dir, exist_ok=True)

    return data_dir


def do_mapping(filename, mapping):
    """
    Update column names of filename according to mapping dict
    """
    data_dir = establish_dirs()
    from_path = f"{data_dir}/{filename}"
    to_path = from_path.replace(".csv", "-mod.csv")
    new_header = ",".join(mapping) + '\n'

    with open(from_path) as from_file, open(to_path, 'w') as to_file:
        # Get rid of old header
        from_file.readline()
        # Write new header
        to_file.write(new_header)
        # Save the rest of the file
        shutil.copyfileobj(from_file, to_file)


def save_data(filename, content):
    """
    Save data to data_dir
    """
    data_dir = establish_dirs()

    # Save the file
    util.write_file(f"{data_dir}/{filename}", content)


def parse_data(filename):
    """
    Returns the columns and first 5 rows as JSON
    """
    data_dir = establish_dirs()

    # Read the file
    df = pd.read_csv(f"{data_dir}/{filename}", nrows=5)
    cols = list(df.columns)
    data = {}

    for col in cols:
        data[col] = json.loads(df[col].to_json())

    return data
