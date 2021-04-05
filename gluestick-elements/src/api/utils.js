class ExtendableError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

class APIError extends ExtendableError {
    constructor(m, errorObj) {
        super(m);
        this.errorObj = errorObj;
    }

    errorObj = null;
}

const doRequest = async (url, body = {}, endpoint = `http://localhost:5000`) => {
	if (!body.headers) {
		body.headers = {'Content-Type': "application/json"};
	}
	// delete any undefined headers
	Object.keys(body.headers).forEach(key => body.headers[key] === undefined ? delete body.headers[key] : {});
    url = `${endpoint}/${url}`

	const response = await fetch(url, body);

	if (response.status !== 200) {
		const handleError = async () => {
			if (response) {
				const {Code, Message} = await response.json();
				if (Code && Message) {
					throw new APIError(Message.replace("ChaliceViewError:", ""), response.data);
				} else
					throw new APIError(response.statusText, response.data)
			} else {
				throw new Error(response.statusText)
			}
		};

		return handleError();
	}

	return response.json();
}

export const Request = {
	GET : (url,body, endpoint) => doRequest(url,{...{method:'GET'}, ...body }, endpoint),
	DELETE : (url,body, endpoint) => doRequest(url,{...{method:'DELETE'}, ...body }, endpoint),
	POST : (url,body, endpoint) => doRequest(url,{...{method:'POST'}, ...body }, endpoint)
};
