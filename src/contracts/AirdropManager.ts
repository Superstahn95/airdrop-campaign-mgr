import { ethers, Interface, InterfaceAbi } from "ethers";

const CONTRACT_ADDRESS = "0xmydeployedcontractaddress";

const CONTRACT_ABI: Interface | InterfaceAbi = [];

export const getContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, providerOrSigner);
};
