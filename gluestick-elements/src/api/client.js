import { Request } from './utils'

export function uploadFiles(user, file) {
    // Create the form data
    const formData = new FormData();
    formData.append(file.name, file);

    // Send the request
    return Request.POST(`file/${user}/upload`, {body: formData, headers: {'Content-Type': undefined}});
}

export function doMapping(user, filename, mapping, schema) {
    return Request.POST(`file/${user}/map`, {body: JSON.stringify({filename, mapping, schema})});
}

export function validateMapping(user, filename, mapping, schema) {
    return Request.POST(`file/${user}/validate`, {body: JSON.stringify({filename, mapping, schema})});
}
