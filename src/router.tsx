import { createBrowserRouter } from "react-router-dom";
import Landing from "./layout/Landing";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
