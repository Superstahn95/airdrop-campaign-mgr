import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddCampaign from "./pages/AddCampaign";
import Campaigns from "./pages/Campaigns";
import Campaign from "./pages/Campaign/Index";
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
    {
      path: "/campaign/:id",
      element: <Campaign />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
