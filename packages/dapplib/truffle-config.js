require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan random night public install close borrow tell'; 
let testAccounts = [
"0x05aeaf8655bd01e594299d6ba9063949d372d4c209f13fc01501299c7b8fda6a",
"0x6d923207489e45eb4313e2139922210d90475a88dfda820475c6279076d0fa1d",
"0xa16b605687aa2c4012e682b1ef00d4e6aa3e4a3d34e67b00aba70b2bafabc21d",
"0xbda32012e28107ca630d04b0ee93184c9f1a7a4364ef2cb5aca24ac8314f94ee",
"0x4aa1bfecb07c4fa7d943f29cd3532a7844f9b07d2b7dcad008e5e0cc50818a26",
"0xa2fdc95375ba2a7a40a1e1eaef1f7a9a12082d7808ceec1de98e845f822e09e5",
"0x51654e15366f5d542047286f9bf2d5fa62142b744ec9c446ea690d3d8b3aa8d4",
"0x400ff47af7a8a657da1cd558908d80377aa7ce297673470bfe904c741fbcba21",
"0x6cfe738194b8af1a43229e5c30a58ecbd711a927baab22aff094d46009b2f2fd",
"0x99af87114d65b4dcb9c2d67e056dd12d7e40455f2ffb83fac07a473b1fa21545"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

