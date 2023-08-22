import "./scss/styles.scss";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/GoogleSearchPage";
import SearchImage from "./pages/ImageSearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/images" element={<SearchImage />} />
    </Routes>
  );
}

export default App;
