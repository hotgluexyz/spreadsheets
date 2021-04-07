import os
import json
import enum
import shutil


class Lifecycle(enum.Enum):
    FILE_UPLOADED = "FILE_UPLOADED"
    MAPPING_VALIDATION = "MAPPING_VALIDATION"
    MAPPING_COMPLETED = "MAPPING_COMPLETED"
    DATA_EXPORTED = "DATA_EXPORTED"


# Takes a string key and JSON payload and returns a signature
def create_signature(webhook_secret, payload):
    import hashlib
    import hmac

    byte_key = bytes(webhook_secret, 'utf-8')
    message = payload.encode('utf-8')
    h = hmac.new(byte_key, message, hashlib.sha1)
    signature = h.hexdigest()
    return signature


# Invokes the environment configured webhook with specified payload
def trigger_hook(user, status):
    # Build the payload
    payload = json.dumps({'user': user, 'status': status.value}, separators=(',', ':'))

    # Get parameters
    webhook_url = os.environ.get("GLUESTICK_WEBHOOK_URL")
    webhook_secret = os.environ.get("GLUESTICK_WEBHOOK_SECRET")

    # Check if there is a configured webhook_url
    if webhook_url is None:
        return {"message": f"No gluestick webhook configured", "status": "NO_HOOK"}

    signature = None

    if webhook_secret is not None:
        # If there's a secret, we encrypt the payload to give a X-Hub-Signature
        signature = create_signature(webhook_secret, payload)

    params = {
        "endpoint": webhook_url,
        "data": payload,
        "headers": {
            'X-Hub-Signature': signature,
            "Content-Type": "application/json"
        }
    }

    message = f"Invoke client's gluestick webhook with params [{json.dumps(params)}]\n"

    try:
        # Send request
        response = requests.post(
            params.get('endpoint'),
            data=params.get('data'),
            headers=params.get('headers')
        )

        status = response.status_code
        message += response.text
        response.raise_for_status()
    except Exception as err:
        message += f"\nFailed when calling client's gluestick webhook ; endpoint {params.get('endpoint')}, see logs above for full request details."
        message += f"\nThis error is ignored here, but this is a serious issue."

    return {"message": message, "status": status}


def write_json_file(filename, content):
    with open(filename, 'w') as f:
        json.dump(content, f, indent=4)


def write_file(filename, data):
    fh = open(filename, "wb")
    try:
        fh.write(data)
    finally:
        fh.close()


def get_key(d, val):
    for key, value in d.items():
         if val == value:
             return key
 
    return None


def del_exists(path):
    if os.path.exists(path):
        shutil.rmtree(path)
