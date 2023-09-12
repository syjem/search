import "./scss/styles.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/GoogleSearchPage";
import SearchImage from "./pages/ImageSearchPage";
import SearchAdvanced from "./pages/AdvancedSearchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/images",
      element: <SearchImage />,
    },
    {
      path: "/advanced_search",
      element: <SearchAdvanced />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
