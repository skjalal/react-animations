import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  type DataRouter,
  type RouteObject,
} from "react-router";
import Root from "./pages/Root";
import WelcomePage from "./pages/Welcome";
import ChallengesPage from "./pages/Challenges";
import "./App.css";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Navigate replace to="/react-animation" />,
    },
    {
      path: "/react-animation",
      element: <Root />,
      children: [
        {
          index: true,
          element: <WelcomePage />,
        },
        { path: "challenges", element: <ChallengesPage /> },
      ],
    },
  ];

  const router: DataRouter = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
