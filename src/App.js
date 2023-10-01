import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePages'
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
