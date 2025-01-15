import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import IndividualCampaignStatistics from "../AddCampaign/components/IndividualCampaignStatistics";
import CampaignForm from "../../components/CampaignForm/CampaignForm";
import { Campaign } from "../Campaigns";
import { allCampaigns } from "../Campaigns";
import { LinkType } from "../../components/CampaignForm/CampaignForm";
function EditCampaign() {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [links, setLinks] = useState<LinkType[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [linkCount, setLinkCount] = useState<number>(1);
  const [stepCount, setStepCount] = useState<number>(1);

  const params = useParams();
  const id = params.id;
  const getCampaign = useCallback(() => {
    // the below should be an actual call to get that particular campaign
    setCampaign(allCampaigns.filter((camp) => camp.id == id)[0]);
    if (campaign) {
      // update state variables depending on the campaign being gotten
      setLinks(campaign.campaignLinks);
      setSteps(campaign.campaignSteps);
      setDescription(campaign.description);
      setName(campaign.name);
      setLinkCount(campaign.campaignLinks.length);
      setStepCount(campaign.campaignSteps.length);
    }
  }, [campaign, id]);

  const handleEdit = () => {
    console.log("edit campaign");
  };

  useEffect(() => {
    getCampaign();
  }, [id, getCampaign]);

  return (
    <div>
      <Navbar />
      <Container>
        <IndividualCampaignStatistics />
        {/* only show the CampaignForm when the campaign is null */}
        {campaign && (
          <CampaignForm
            description={description}
            linkCount={linkCount}
            links={links}
            handleSubmit={handleEdit}
            name={name}
            setDescription={setDescription}
            setLinkCount={setLinkCount}
            setLinks={setLinks}
            setName={setName}
            setStepCount={setStepCount}
            setSteps={setSteps}
            stepCount={stepCount}
            steps={steps}
          />
        )}
      </Container>
    </div>
  );
}

export default EditCampaign;
