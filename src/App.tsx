import "./scss/styles.scss";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/GoogleSearchPage";
import SearchImage from "./pages/ImageSearchPage";
import SearchAdvanced from "./pages/AdvancedSearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/images" element={<SearchImage />} />
      <Route path="/advanced_search" element={<SearchAdvanced />} />
    </Routes>
  );
}

export default App;
