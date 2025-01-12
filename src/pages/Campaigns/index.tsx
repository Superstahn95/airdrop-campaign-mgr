import { useState, useEffect, useCallback } from "react";
import { LinkType } from "../AddCampaign/components/NewCampaign";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Filter from "./components/Filter";
import CampaignCard from "../../components/Campaign";

// dummy campaings
export const allCampaigns: Campaign[] = [
  {
    id: "1",
    campaignLinks: [
      { description: "faucet", link: "https://faucet.com" },
      { description: "bridge", link: "https://faucet-bridge.com" },
    ],
    campaignSteps: ["visit testnet", "swap usdt to bsc", "claim nfts"],
    description: "random airdrop description",
    name: "Blockstout camaign",
    isRunning: true,
  },
  {
    id: "2",
    campaignLinks: [
      { description: "faucet", link: "https://faucet.com" },
      { description: "bridge", link: "https://faucet-bridge.com" },
    ],
    campaignSteps: ["visit testnet", "swap usdt to bsc", "claim nfts"],
    description: "random airdrop description",
    name: "Humanity camaign",
    isRunning: false,
  },
  {
    id: "3",
    campaignLinks: [
      { description: "faucet", link: "https://faucet.com" },
      { description: "bridge", link: "https://faucet-bridge.com" },
    ],
    campaignSteps: ["connect wallet", "post on x"],
    description: "random airdrop description",
    name: "Benjamin protocol",
    isRunning: true,
  },
  {
    id: "4",
    campaignLinks: [
      { description: "faucet", link: "https://faucet.com" },
      { description: "bridge", link: "https://faucet-bridge.com" },
    ],
    campaignSteps: ["connect wallet", "post on x"],
    description: "random airdrop description",
    name: "Confidential layer",
    isRunning: true,
  },
];

export interface Campaign {
  id: string;
  name: string;
  description: string;
  campaignLinks: LinkType[];
  campaignSteps: string[];
  isRunning: boolean;
}
function Campaigns() {
  const isConnected = true;
  const [campaigns, setCampaigns] = useState<Campaign[] | null>();
  const [displayedCampaigns, setDisplayedCampaigns] = useState<
    Campaign[] | null
  >();
  const [filterOption, setFilterOption] = useState<"all" | "open" | "closed">(
    "all"
  );

  // Function to filter campaigns based on filterOption
  const filterCampaigns = useCallback(() => {
    switch (filterOption) {
      case "open":
        setDisplayedCampaigns(
          campaigns?.filter((campaign) => campaign.isRunning)
        );
        break;
      case "closed":
        setDisplayedCampaigns(
          campaigns?.filter((campaign) => !campaign.isRunning)
        );
        break;
      case "all":
      default:
        setDisplayedCampaigns(campaigns);
    }
  }, [campaigns, filterOption]);

  useEffect(() => {
    //figure out a way to fetch user campaigns from smart contract
    setCampaigns(allCampaigns);
  }, []);

  useEffect(() => {
    filterCampaigns();
  }, [filterOption, campaigns, filterCampaigns]);
  return (
    <>
      <Navbar />
      <div className="flex justify-center  h-[90vh]">
        <Container>
          {!isConnected ? (
            <div className="text-white font-montserrat text-2xl text-center">
              Hey!! connect wallet to check your campaigns
            </div>
          ) : (
            <div className="mt-10">
              <Filter
                filterOption={filterOption}
                setFilterOption={setFilterOption}
              />
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {displayedCampaigns?.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}

export default Campaigns;
