import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import IndividualCampaignStatistics from "./components/IndividualCampaignStatistics";
import NewCampaign from "./components/NewCampaign";

function AddCampaign() {
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

export default AddCampaign;
