import { useContext } from "react";
import { AirdropManagerContext } from "../context/AirdropManagerContext";

function useAirdropManager() {
  return useContext(AirdropManagerContext);
}

export default useAirdropManager;
