const { Blockchain, Transaction } = require('./Blockchain.js');
const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("f291ecf2bfdfefdf6ec1088ddb5a596b19c6211490d19a6acf2425d6aeaff627");
const myWalletAddress = myKey.getPublic('hex');
console.log(myWalletAddress)

let coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 1000);
tx1.signTransaction(myKey);

const tx2 = new Transaction(myWalletAddress, 'public key goes here', 2000);
tx2.signTransaction(myKey);

coin.addTransaction(tx1);
coin.addTransaction(tx2);

console.log("Starting the miner...");

coin.minePendingTransactions(myWalletAddress);
console.log("balance", coin.getBalanceOfAddress(myWalletAddress))
console.log(coin.getLatestBlock())

coin.minePendingTransactions(myWalletAddress);
console.log(coin.getLatestBlock())
console.log("balance", coin.getBalanceOfAddress(myWalletAddress))