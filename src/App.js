import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage";

import AdminPage from "./Pages/AdminPage";
import AddStaffPage from "./Pages/AddStaffPage";
import AdminViewStaffPage from "./Pages/AdminViewStaffPage";
import AdminDeleteStaffPage from "./Pages/AdminDeleteStaffPage";
import AdminUpdateStaffPage from "./Pages/AdminUpdateStaffPage";
import AdminViewFeedbackPage from "./Pages/AdminViewFeedbackPage";
import AdminViewHistoryPage from "./Pages/AdminViewHistoryPage";
import AdminAddHistoryPage from "./Pages/AdminAddHistoryPage";
import AdminViewReportPage from './Pages/AdminViewReportPage';

import ViewDetailFeedbackPage from "./Pages/ViewDetailFeedbackPage";

import StaffPage from "./Pages/StaffPage";
import StaffViewStaffPage from "./Pages/StaffViewStaffPage";
import StaffViewFeedbackPage from "./Pages/StaffViewFeedbackPage";
import StaffAddHistoryPage from "./Pages/StaffAddHistoryPage";
import StaffViewHistoryPage from "./Pages/StaffViewHistoryPage";
import StaffViewReportPage from './Pages/StaffViewReportPage';

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
          <Route path="/admin/view-staff" element={<AdminViewStaffPage />} />
          <Route path="/admin/delete-staff/:id" element={<AdminDeleteStaffPage />} />
          <Route path="/admin/update-staff/:id" element={<AdminUpdateStaffPage />} />
          <Route path="/admin/view-feedback" element={<AdminViewFeedbackPage />} />
          <Route path="/admin/view-history" element={<AdminViewHistoryPage />} />
          <Route path="/admin/add-history" element={<AdminAddHistoryPage />} />
          <Route path="/admin/view-report" element={<AdminViewReportPage />} />

          <Route path="/view-detail/feedback/:id" element={<ViewDetailFeedbackPage />} />

          <Route path="/staff" element={<StaffPage />} />
          <Route path="/staff/view-staff" element={<StaffViewStaffPage />} />
          <Route path="/staff/view-feedback" element={<StaffViewFeedbackPage />} />
          <Route path="/staff/add-history" element={<StaffAddHistoryPage />} />
          <Route path="/staff/view-history" element={<StaffViewHistoryPage />} />
          <Route path="/staff/view-report" element={<StaffViewReportPage />} />

          <Route path="/create-feedback" element={<CreateFeedbackPage />} />
          <Route path="/create-feedback/success" element={<CreateFeedbackSuccessPage />} />
          <Route path="/view-feedback" element={<ViewFeedbackPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
