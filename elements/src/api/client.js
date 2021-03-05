import { Request } from './utils'

export function uploadFiles(file) {
    // Create the form data
    const formData = new FormData();
    formData.append(file.name, file);

    // Send the request
    return Request.POST(`file/upload`, {body: formData, headers: {'Content-Type': undefined}});
}
