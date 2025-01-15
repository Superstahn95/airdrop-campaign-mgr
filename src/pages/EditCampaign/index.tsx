import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import IndividualCampaignStatistics from "../AddCampaign/components/IndividualCampaignStatistics";
import NewCampaign from "../AddCampaign/components/NewCampaign";
function EditCampaign() {
  const params = useParams();
  return (
    <div>
      <Navbar />
      <Container>
        <IndividualCampaignStatistics />
        <NewCampaign />
      </Container>
    </div>
  );
}

export default EditCampaign;
