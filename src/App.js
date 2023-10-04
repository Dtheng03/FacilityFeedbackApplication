import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage";
import CreateFeedbackPage from "./Pages/CreateFeedbackPage";
import CreateFeedbackSuccessPage from "./Pages/CreateFeedbackSuccessPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-feedback" element={<CreateFeedbackPage />} />
          <Route path="/create-feedback/success" element={<CreateFeedbackSuccessPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
