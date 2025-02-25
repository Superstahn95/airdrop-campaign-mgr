/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";
function Navbar() {
  return (
    <div className=" p-4 border-b border-white h-[10vh] flex items-center justify-center">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-montserrat font-bold text-2xl text-white"
          >
            AirdropManager
          </Link>
          <Button
            text="Connect wallet"
            callback={() =>
              console.log("connect or disconnect wwallet as the case may be")
            }
          />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
