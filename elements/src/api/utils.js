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

const doRequest = async (url, body = {}, options = {}) => {
	if (!body.headers) {
		body.headers = {'Content-Type': "application/json"};
	}
	// delete any undefined headers
	Object.keys(body.headers).forEach(key => body.headers[key] === undefined ? delete body.headers[key] : {});
    url = `http://localhost:5000/${url}`

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
	GET : (url,body, options) => doRequest(url,{...{method:'GET'}, ...body }, options),
	DELETE : (url,body) => doRequest(url,{...{method:'DELETE'}, ...body }),
	POST : (url,body) => doRequest(url,{...{method:'POST'}, ...body }),
};
