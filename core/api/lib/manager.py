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

    # Update column names
    with open(from_path) as from_file, open(to_path, 'w') as to_file:
        # Get old cols
        cols = from_file.readline().rstrip().split(",")
        # Update col names
        new_cols = list(map(lambda x: mapping[x] if x in mapping else x, cols))
        # Create new header
        new_header = ",".join(new_cols) + '\n'
        # Write new header
        to_file.write(new_header)
        # Save the rest of the file
        shutil.copyfileobj(from_file, to_file)

    # Drop any unnecessary columns
    if len(mapping) < len(cols):
        # Read the updated column names
        df = pd.read_csv(to_path)
        # Get the required col names
        required_cols = list(mapping.values())
        # Only keep these
        df = df[required_cols]
        # Write the new CSV
        df.to_csv(to_path, index=False)

    # Return a preview
    return preview_df(to_path)


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


def preview_df(path):
    """
    Generates a JSON preview of the final data
    """
    df = pd.read_csv(path, nrows=5)
    cols = list(df.columns)
    rows = []

    rows.append(list(map(lambda x: {'value': x}, cols)))

    for index, row in df.iterrows():
        row_data = []

        for col in cols:
            row_data.append({'value': row[col]})

        rows.append(row_data)

    return rows
