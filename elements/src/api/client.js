import { Request } from './utils'

export function uploadFiles(file) {
    // Create the form data
    const formData = new FormData();
    formData.append(file.name, file);

    // Send the request
    return Request.POST(`file/default/upload`, {body: formData, headers: {'Content-Type': undefined}});
}

export function doMapping(filename, mapping, schema) {
    return Request.POST(`file/default/map`, {body: JSON.stringify({filename, mapping, schema})});
}

export function validateMapping(filename, mapping, schema) {
    return Request.POST(`file/default/validate`, {body: JSON.stringify({filename, mapping, schema})});
}
