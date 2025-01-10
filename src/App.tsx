import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddCampaign from "./pages/AddCampaign";
import Campaigns from "./pages/Campaigns";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <AddCampaign />,
    },
    {
      path: "/campaigns",
      element: <Campaigns />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
