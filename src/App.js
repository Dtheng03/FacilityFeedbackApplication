import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage";

import AdminPage from "./Pages/AdminPage";
import AddStaffPage from "./Pages/AddStaffPage";
import ViewStafPage from "./Pages/ViewStaffPage";
import AdminViewFeedbackPage from "./Pages/AdminViewFeedbackPage";
import AdminViewHistoryPage from "./Pages/AdminViewHistoryPage";
import AdminAddHistoryPage from "./Pages/AdminAddHistoryPage";
import AdminViewReportPage from './Pages/AdminViewReportPage';

import CreateFeedbackPage from "./Pages/CreateFeedbackPage";
import CreateFeedbackSuccessPage from "./Pages/CreateFeedbackSuccessPage";
import ViewFeedbackPage from "./Pages/ViewFeedbackPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/add-staff" element={<AddStaffPage />} />
          <Route path="/admin/view-staff" element={<ViewStafPage />} />
          <Route path="/admin/view-feedback" element={<AdminViewFeedbackPage />} />
          <Route path="/admin/view-history" element={<AdminViewHistoryPage />} />
          <Route path="/admin/add-history" element={<AdminAddHistoryPage />} />
          <Route path="/admin/view-report" element={<AdminViewReportPage />} />
          <Route path="/create-feedback" element={<CreateFeedbackPage />} />
          <Route path="/create-feedback/success" element={<CreateFeedbackSuccessPage />} />
          <Route path="/view-feedback" element={<ViewFeedbackPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
