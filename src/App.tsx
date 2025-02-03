import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddCampaign from "./pages/AddCampaign";
import Campaigns from "./pages/Campaigns";
import Campaign from "./pages/Campaign/Index";
import EditCampaign from "./pages/EditCampaign/index";
import AirdropManagerProvider from "./context/AirdropManagerContext";
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
      path: "/edit/:id",
      element: <EditCampaign />,
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
    <AirdropManagerProvider>
      <RouterProvider router={router} />
    </AirdropManagerProvider>
  );
}

export default App;
