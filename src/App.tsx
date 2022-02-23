import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Neo from "./pages/Neo";
import GlobalStyle from "./GlobalStyle"
import SecurityTest from "./pages/SecurityTest";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/neo/:id" element={<Neo />} />
        <Route path="securityTest" element={<SecurityTest />} />
      </Routes>
    </div>
  );
}

export default App;
