/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect, ReactNode } from "react";
import { ethers, BrowserProvider, Interface, InterfaceAbi } from "ethers";

interface TransactionContextType {
  currentAccount: string | null;
  connectWallet: () => void;
  getAirdropCampaigns: () => void;
  getSingleAirdropCampaign: () => void;
  createAirdropCampaign: () => void;
  tickCampaignAsCompleted: () => void;
  updateAirdropCampaign: () => void;
  deleteAirdropCampaign: () => void;
}

export const AirdropManagerContext =
  createContext<TransactionContextType | null>(null);

const CONTRACT_ADDRESS = "MyDeployedContractAdress";
const CONTRACT_ABI: Interface | InterfaceAbi = [];

const getEthereumContract = async () => {
  //get provider
  const provider: BrowserProvider = new BrowserProvider(window.ethereum);
  //get signer
  const signer: ethers.JsonRpcSigner = await provider.getSigner();
  const airdropContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    signer
  );

  console.log(provider, signer, airdropContract);
  // should return the airdrop contract
};

export default function AirdropManagerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentAccount, setCurrentAccount] = useState<string | null>("");

  const checkIfWalletIsConnected = async () => {
    // check if metamask is installed
    try {
      if (!window.ethereum) return alert("Plesase install metamask");

      //request metamask accounts when application loads
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      console.log(accounts);
      if (accounts.length) {
        //set it to first account in the array if it doesn't return an empty array
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install metamask");
      // this requests all the accounts and the user will choose to connect one
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  //complete this function
  const getAirdropCampaigns = () => {};
  const createAirdropCampaign = () => {};
  const getSingleAirdropCampaign = () => {};
  const tickCampaignAsCompleted = () => {};
  const updateAirdropCampaign = () => {};
  const deleteAirdropCampaign = () => {};
  useEffect(() => {
    // check wallet connection whenever app loads
    checkIfWalletIsConnected();
  }, []);

  return (
    <AirdropManagerContext.Provider
      value={{
        currentAccount,
        connectWallet,
        getAirdropCampaigns,
        createAirdropCampaign,
        getSingleAirdropCampaign,
        tickCampaignAsCompleted,
        updateAirdropCampaign,
        deleteAirdropCampaign,
      }}
    >
      {children}
    </AirdropManagerContext.Provider>
  );
}
