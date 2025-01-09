import Container from "../Container";
import Button from "../Button";
function Navbar() {
  return (
    <div className=" p-4 border-b border-white h-[10vh] flex items-center justify-center">
      <Container>
        <div className="flex items-center justify-between">
          <h3 className="font-montserrat font-bold text-2xl text-white">
            AirdropManager
          </h3>
          <Button text="Connect Wallet" />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
