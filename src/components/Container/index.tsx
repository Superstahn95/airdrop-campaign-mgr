import { ReactNode } from "react";

// handles width in the different parts of our application
function Container({ children }: { children: ReactNode }) {
  return <div className="w-[90%] mx-auto">{children}</div>;
}

export default Container;
