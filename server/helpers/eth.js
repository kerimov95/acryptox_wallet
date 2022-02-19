const Web3 = require('web3');
const web3 = new Web3('http://eth:8545');

class ETHError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'ETHNode';
    }
}

module.exports = {
    getaddress: async () => {
        try {
            const address = await web3.eth.personal.newAccount(process.env.ETH_PASSWORD);
            if (address)
                return address;
            else
                throw new ETHError('failed to create new address')
        }
        catch (ex) {
            throw new ETHError(ex.message)
        }
    },

    getbalance: async () => {
        let balance = 0;
        const accounts = await web3.eth.getAccounts();
        for (let i = 0; i < accounts.length; i++) {
            const temp = web3.utils.fromWei(await web3.eth.getBalance(accounts[i]), 'ether');
            balance += +temp
        }
        return balance
    }
}