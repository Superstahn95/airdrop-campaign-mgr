import { useState } from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import IndividualCampaignStatistics from "./components/IndividualCampaignStatistics";
import CampaignForm from "../../components/CampaignForm/CampaignForm";
import { LinkType } from "./components/NewCampaign";

function AddCampaign() {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [linkCount, setLinkCount] = useState<number>(1);
  const [stepCount, setStepCount] = useState<number>(1);
  const addNewCampaign = () => {
    console.log("create new campaign");
  };
  return (
    <div>
      <Navbar />
      <Container>
        <IndividualCampaignStatistics />
        <CampaignForm
          description={description}
          handleSubmit={addNewCampaign}
          linkCount={linkCount}
          links={links}
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
      </Container>
    </div>
  );
}

export default AddCampaign;
