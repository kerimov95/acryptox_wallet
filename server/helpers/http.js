const fetch = require('node-fetch');

class fetchError extends Error {
    constructor(messaage) {
        super(messaage)
        this.name = 'Fetch'
    }
}

module.exports = {
    post: async (url, body) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            return data;
        }
        catch (ex) {
            throw new fetchError(ex.message)
        }
    }
}