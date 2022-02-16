import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Neo from "./pages/Neo";
import GlobalStyle from "./GlobalStyle"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/neo/:id" element={<Neo />} />
      </Routes>
    </div>
  );
}

export default App;
