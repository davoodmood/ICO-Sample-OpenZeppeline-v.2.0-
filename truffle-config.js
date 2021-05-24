/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    // ropsten: {
    //   provider: ropstenProvider,
    //   network_id: 3, // eslint-disable-line camelcase
    // },
    // coverage: {
    //   host: 'localhost',
    //   network_id: '*', // eslint-disable-line camelcase
    //   port: 8555,
    //   gas: 0xfffffffffff,
    //   gasPrice: 0x01,
    // },
    ganache: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
  },
  solc: {
  	optimizer: {
  		enable: true,
  		runs: 200
  	}
  }
};
