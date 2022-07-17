import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x75a594600afead9B1783113d5f36DDD857daD66e"
);

export default instance;
