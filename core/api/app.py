import logging
import re
import json

from flask import Flask, request, jsonify
from requests_toolbelt import MultipartDecoder

from lib import manager

logger = logging.getLogger("gluestick-api")
logging.basicConfig(level=logging.DEBUG, format='%(message)s')

app = Flask(__name__)


def _get_parts():
    content = request.get_data()
    content_type = request.headers['content-type']
    logger.info(f"Received ContentType Header ==> {content_type}")

    decoder = MultipartDecoder(content, content_type)

    files = []
    for p in decoder.parts:
        result = dict()

        result['content'] = p.content
        content_type = p.headers.get(b'content-type')
        if content_type is not None:
            result['content-type'] = content_type.decode("utf-8")

        content_disposition = p.headers.get(b'content-disposition')
        if content_disposition is not None:
            content_disposition = content_disposition.decode("utf-8")
            m = re.search(r'filename=\"([^\"]*)', content_disposition)
            result['content-disposition'] = content_disposition
            if m and m.group(1):
                result['filename'] = m.group(1)

        files.append(result)

    return files


@app.route('/file/map', methods=['POST'])
def do_mapping():
    body = request.json
    filename = body.get("filename")
    mapping = body.get("mapping")

    if mapping is None:
        return {'code': 'error', 'message': 'No mapping Provided'}, 400

    logger.debug(f"[do_mapping]: Received mapping={json.dumps(mapping)}")
    # Save the schema for later
    manager.do_mapping(filename, mapping)

    return {'code': 'success'}


@app.route('/file/upload', methods=['POST'])
def upload_file():
    logger.debug(f"[upload_file]: parsing payload")
    files = _get_parts()

    if files is None or len(files) == 0:
        return {'code': 'error', 'message': 'No Schema Provided'}, 400

    logger.debug(f"[upload_file]: received {len(files)} files")

    # Currently restricted to one file
    file = files[0]
    filename = file.get('filename')

    # Save the file
    logger.info(f"[upload_file]: Uploading {filename}")
    manager.save_data(filename, file.get("content"))

    # Return the column names, and first 5 rows
    data = manager.parse_data(filename)

    return {'code': 'success', 'data': data}
