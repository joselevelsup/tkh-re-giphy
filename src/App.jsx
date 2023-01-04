import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TrendingPage from "./pages/trending";
import SearchPage from "./pages/search";
import RandomPage from "./pages/random";
import Layout from "./pages/layout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/trending",
        element: <TrendingPage />,
      },
      {
        path: "/random",
        element: <RandomPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
