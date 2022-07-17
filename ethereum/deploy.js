const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "mnemonic phrase",
  "https://rinkeby.infura.io/v3/10dca99ee5044bcbab78601431dfd8b8"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(`Attempting to deploy a contract from account: ${accounts[0]}`);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({
      data: compiledFactory.bytecode,
      arguments: ["Initial Message"],
    })
    .send({ gas: "1000000", from: accounts[0] });

  console.log(`Contract deployed to: ${result.options.address}`);
  provider.engine.stop();
};
deploy();
