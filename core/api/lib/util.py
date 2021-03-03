import json

def write_json_file(filename, content):
    with open(filename, 'w') as f:
        json.dump(content, f, indent=4)


def write_file(filename, data):
    fh = open(filename, "wb")
    try:
        fh.write(data)
    finally:
        fh.close()
