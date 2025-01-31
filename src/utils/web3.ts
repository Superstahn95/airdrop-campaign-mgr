import { BrowserProvider } from "ethers";

export const getProvider = () => {
  if (window.ethereum) {
    return new BrowserProvider(window.ethereum);
  }

  throw new Error("Metamask or web3 provider is required");
};

export const getSigner = async () => {
  const provider = getProvider();
  await provider.send("eth_requestAccounts", []);
  return provider.getSigner();
};
