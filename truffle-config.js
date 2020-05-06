require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food chaos reward stereo column inside light army gas'; 
let testAccounts = [
"0x0e8723a2aea43e0cd8817ff50b7843f2477c8b72b5d80575408458522dc7ec14",
"0x026df4bd77610a1a9030a04c44cba02b96a93a265e04d4993f9dae3a3a144a31",
"0x5c59a4878c7376fa60f7b52a5cf996ddd7c9cabb76a353f9b1ac1752365be9d2",
"0x220ec7fb3494dffa882d687659755e5e5ead4d0382085c88da972f33a2344dcf",
"0xbcb35faaf8a9e4f9460d141b0a62a82c8a59a513bf880273a3acefbc0c6dc531",
"0xe0e15af199a626de3216b5d46954f88e1b9e4dcc58a0dcca546a93e30df23483",
"0x1c6c723c52f14dc85a2fd04d1e88796551e3a5c516bb6da5accdcd601c232537",
"0x7fd5425251ce4d153fba13bfaf22a50a4a6fc47c9ad80b6c9913fb0edbf008da",
"0x6cfd17e8b71128f0a7c782f1c94ffd5e96e3efdbaa1f629ff825419e58f6c9fb",
"0x7fceaf22c452beef4cacf485131de43be987b8cb58fb3f1f47177c165d3ac2c0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
