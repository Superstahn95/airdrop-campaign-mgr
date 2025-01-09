import { useNavigate } from "react-router-dom";
import Container from "../../../components/Container";
import Button from "../../../components/Button";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Container>
        <div className="text-white">
          <h2 className="text-center text-6xl font-bold capitalize font-montserrat">
            Keep track of your airdrop campaigns
          </h2>
          <p className="text-center text-xl capitalize font-montserrat my-4">
            Scared of losing links and tired and tired of having numerous tabs
            opened???
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <Button text="Add Campaign" callback={() => navigate("/add")} />
        </div>
      </Container>
    </div>
  );
}

export default Hero;
