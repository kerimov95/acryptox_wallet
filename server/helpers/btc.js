const http = require('./http');

const url = 'http://user:password@btc';
const port = '8332';

class BTCError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'BTCNode';
    }
}

setTimeout(() => {
    http.post(`${url}:${port}`, { "jsonrpc": "1.0", "id": "curltest", "method": "loadwallet", "params": ["wallet"] })
        .then((responce) => {
            if (responce.error && responce.error.code === -18) {
                http.post(`${url}:${port}`, { "jsonrpc": "1.0", "id": "curltest", "method": "createwallet", "params": ["wallet"] })
                    .then(data => {
                        console.log('create wallet')
                    }).catch((error) => {
                        console.error(error)
                        console.error('failed to create wallet')
                    })
                return;
            }
            console.log('load wallet')
        }).catch((error) => {
            console.error(error)
            console.error('failed to load wallet')
        })
}, 10000);

module.exports = {
    getaddress: async () => {
        try {
            const responce = await http.post(`${url}:${port}`,
                { "jsonrpc": "1.0", "id": "curltest", "method": "getnewaddress", "params": [] });
            if (responce.result)
                return responce.result;
            else
                throw new BTCError('failed to create new address')
        }
        catch (ex) {
            throw new BTCError(ex.message)
        }
    },
    getbalance: async () => {
        try {
            const responce = await http.post(`${url}:${port}`,
                { "jsonrpc": "1.0", "id": "curltest", "method": "getbalance", "params": ["*", 6] });
            return responce.result;
        }
        catch (ex) {
            throw new BTCError(ex.message)
        }
    }
}