const btc = require('../../helpers/btc');
const eth = require('../../helpers/eth');

module.exports = {

    getaddress: async (req, res) => {
        try {
            const btcAddress = await btc.getaddress();
            const ethAddress = await eth.getaddress();

            res.json({
                BTC: btcAddress,
                ETH: ethAddress
            });
        }
        catch (ex) {
            console.error(ex)
            res.status(500).json({
                message: ex.message
            })
        }
    },

    getbalance: async (req, res) => {
        try {
            const btcBalance = await btc.getbalance();
            const ethBalance = await eth.getbalance();

            res.json({
                BTC: btcBalance,
                EHT: ethBalance
            });
        }
        catch (ex) {
            console.error(ex)
            res.status(500).json({
                message: ex.message
            })
        }
    }
}