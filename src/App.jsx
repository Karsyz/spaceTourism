import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Index />}
      >
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/destination"
          element={<Destination />}
        />
        <Route
          path="/crew"
          element={<Crew />}
        />
        <Route
          path="/technology"
          element={<Technology />}
        />
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
