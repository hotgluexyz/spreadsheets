import { Request } from './utils'

export function uploadFiles(endpoint, user, file) {
    // Create the form data
    const formData = new FormData();
    formData.append(file.name, file);

    // Send the request
    return Request.POST(`file/${user}/upload`, {body: formData, headers: {'Content-Type': undefined}}, endpoint);
}

export function doMapping(endpoint, user, filename, mapping, schema) {
    return Request.POST(`file/${user}/map`, {body: JSON.stringify({filename, mapping, schema})}, endpoint);
}

export function validateMapping(endpoint, user, filename, mapping, schema) {
    return Request.POST(`file/${user}/validate`, {body: JSON.stringify({filename, mapping, schema})}, endpoint);
}
