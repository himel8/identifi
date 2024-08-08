require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs");

let privateKey;
try {
  privateKey = fs.readFileSync("secret.txt").toString().trim();
} catch (error) {
  console.error("Error reading private key from secret.txt:", error);
  process.exit(1); // Exit the process if the private key cannot be read
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {
      chainId: 4202,
    },
    BitTorrent: {
      url: "https://pre-rpc.bt.io/",
      accounts: [privateKey],
      gasPrice: 1000000000,
    },
  },
  solidity: "0.8.24",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true, // Fixed typo from logginEnabled to loggingEnabled
};
