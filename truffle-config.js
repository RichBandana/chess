const path = require("path");

module.exports = {
  contracts_directory: path.join(__dirname, "contracts/"),
  migrations_directory: path.join(__dirname, "migrations/"),
  test_directory: path.join(__dirname, "test/"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Change to your Ganache port if different
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify your Solidity version
    }
  }
};
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "Your-Infura-Project-ID";
const mnemonic = "your-metamask-seed-phrase";

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
      network_id: 11155111, // Sepolia network id
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
      network_id: 5, // Goerli network id
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
