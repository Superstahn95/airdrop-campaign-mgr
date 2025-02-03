/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect, ReactNode } from "react";
import { ethers, BrowserProvider, Interface, InterfaceAbi } from "ethers";

interface TransactionContextType {
  currentAccount: string | null;
  connectWallet: () => void;
}

const AirdropManagerContext = createContext<TransactionContextType | null>(
  null
);

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
};

export default function AirdropManagerProvider({
  children,
}: {
  children: ReactNode;
}) {
  // const [contract, setContract] = useState<string | null>(null);
  // const [signer, setSigner] = useState<string | null>(null);
  // const [provider, setProvider] = useState<string | null>(null);
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState(false);
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
  const connectWallet = () => {};
  useEffect(() => {
    // check wallet connection whenever app loads
    checkIfWalletIsConnected();
  }, []);

  return (
    <AirdropManagerContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </AirdropManagerContext.Provider>
  );
}
