import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import DeleteModal from "./components/DeleteModal";
import { Campaign } from "../Campaigns";
import { allCampaigns } from "../Campaigns";

function SingleCampaign() {
  const params = useParams();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const id = params.id;
  useEffect(() => {
    //figure out ways to get campaign with that id from the user's airdrop campaigns
    setCampaign(allCampaigns.filter((campaign) => campaign.id == id)[0]);
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="flex justify-center  h-[90vh]">
        <Container>
          <div className="mt-10 text-white font-montserrat">
            <div className="flex space-x-2 items-center">
              <h2 className="font-bold text-7xl">{campaign?.name}</h2>
              <div className="flex space-x-1">
                <button className="text-green-500 p-2 rounded-md border border-white w-[50px] h-[50px] flex items-center justify-center">
                  <CiEdit size={30} />
                </button>
                <button className="text-red-500 p-2 rounded-md border border-white w-[50px] h-[50px] flex items-center justify-center">
                  <MdDeleteOutline size={30} />
                </button>
              </div>
            </div>
          </div>
          {/* status */}
          <div className="flex items-center space-x-2 my-3">
            <div
              className={`w-[20px] h-[20px] rounded-full ${
                campaign?.isRunning ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span
              className={`text-xl ${
                campaign?.isRunning ? "text-green-500" : "text-red-500"
              } `}
            >
              {campaign?.isRunning ? "Running" : "Closed"}
            </span>
          </div>
          {/* description */}
          <div className="my-4">
            <p className="text-white text-xl">{campaign?.description}</p>
          </div>

          {/* links */}
          <div>
            <h2 className="font-bold text-3xl text-white underline">Links</h2>
            <ul>
              {campaign?.campaignLinks.map((link) => (
                <li className="text-white mt-2 text-xl">
                  <span className="capitalize mr-2">{link.description}:</span>
                  {link.link}
                </li>
              ))}
            </ul>
          </div>
          {/* steps */}
          <div className="my-4">
            <h2 className="font-bold text-3xl text-white underline mb-4">
              Steps
            </h2>
            <ul>
              {campaign?.campaignSteps.map((step) => (
                <li className="text-white mt-2 text-xl">{step}</li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      <DeleteModal />
    </>
  );
}

export default SingleCampaign;
