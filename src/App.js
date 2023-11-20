import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage";

import AdminPage from "./Pages/AdminPage";
import AddStaffPage from "./Pages/AddStaffPage";
import AdminViewStaffPage from "./Pages/AdminViewStaffPage";
import AdminViewDetailStaffPage from "./Pages/AdminViewDetailStaffPage";
import AdminUpdateStaffPage from "./Pages/AdminUpdateStaffPage";
import AdminDeleteStaffPage from "./Pages/AdminDeleteStaffPage";

import RoomManagementPage from "./Pages/RoomManagementPage";
import ViewRoomPage from "./Pages/ViewRoomPage";
import ViewDetailRoomPage from "./Pages/ViewDetailRoomPage";
import AddRoomPage from "./Pages/AddRoomPage";
import ViewRoomTypePage from "./Pages/ViewRoomTypePage";
import AddRoomTypePage from "./Pages/AddRoomTypePage";
import DeleteRoomPage from "./Pages/DeleteRoomPage";
import UpdateRoomPage from "./Pages/UpdateRoomPage";

import FacilityManagementPage from "./Pages/FacilityManagementPage";
import ViewFacilityPage from "./Pages/ViewFacilityPage";
import AddFacilityPage from "./Pages/AddFacilityPage";
import UpdateFacilityPage from "./Pages/UpdateFacilityPage";
import ViewFacilityTypePage from "./Pages/ViewFacilityTypePage";
import AddFacilityTypePage from "./Pages/AddFacilityTypePage";
import ViewFacilityProblemPage from "./Pages/ViewFacilityProblemPage";
import AddFacilityProblemPage from "./Pages/AddFacilityProblemPage";

import AdminViewFeedbackPage from "./Pages/AdminViewFeedbackPage";
import AdminTaskPage from "./Pages/AdminTaskPage";
import AdminViewHistoryPage from "./Pages/AdminViewHistoryPage";
import AdminAddHistoryPage from "./Pages/AdminAddHistoryPage";
import AdminViewReportPage from './Pages/AdminViewReportPage';

import AssignPage from "./Pages/AssignPage";
import StatisticPage from "./Pages/StatisticPage";

import ViewDetailFeedbackPage from "./Pages/ViewDetailFeedbackPage";
import ViewDetailHistoryPage from "./Pages/ViewDetailHistoryPage";

import StaffPage from "./Pages/StaffPage";
import StaffViewStaffPage from "./Pages/StaffViewStaffPage";
import StaffViewFeedbackPage from "./Pages/StaffViewFeedbackPage";
import StaffTaskPage from "./Pages/StaffTaskPage";
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
          <Route path="/admin/view-detail/staff/:id" element={<AdminViewDetailStaffPage />} />
          <Route path="/admin/delete-staff/:id" element={<AdminDeleteStaffPage />} />
          <Route path="/admin/update-staff/:id" element={<AdminUpdateStaffPage />} />

          <Route path="/admin/room-management" element={<RoomManagementPage />} />
          <Route path="/admin/view-room" element={<ViewRoomPage />} />
          <Route path="/admin/view-detail/room/:id" element={<ViewDetailRoomPage />} />
          <Route path="/admin/add-room" element={<AddRoomPage />} />
          <Route path="/admin/view-room-type" element={<ViewRoomTypePage />} />
          <Route path="/admin/add-room-type" element={<AddRoomTypePage />} />
          <Route path="/admin/delete-room/:id" element={<DeleteRoomPage />} />
          <Route path="/admin/update-room/:id" element={<UpdateRoomPage />} />

          <Route path="/admin/facility-management" element={<FacilityManagementPage />} />
          <Route path="/admin/view-facility" element={<ViewFacilityPage />} />
          <Route path="/admin/add-facility" element={<AddFacilityPage />} />
          <Route path="/admin/update-facility/:id" element={<UpdateFacilityPage />} />
          <Route path="/admin/view-facility-type" element={<ViewFacilityTypePage />} />
          <Route path="/admin/add-facility-type" element={<AddFacilityTypePage />} />
          <Route path="/admin/view-facility-problem" element={<ViewFacilityProblemPage />} />
          <Route path="/admin/add-facility-problem" element={<AddFacilityProblemPage />} />

          <Route path="/admin/view-feedback" element={<AdminViewFeedbackPage />} />
          <Route path="/admin/tasks" element={<AdminTaskPage />} />
          <Route path="/admin/view-history" element={<AdminViewHistoryPage />} />
          <Route path="/admin/add-history" element={<AdminAddHistoryPage />} />
          <Route path="/admin/view-report" element={<AdminViewReportPage />} />

          <Route path="admin/assign" element={<AssignPage />} />
          <Route path="admin/statistics" element={<StatisticPage />} />

          <Route path="/view-detail/feedback/:id" element={<ViewDetailFeedbackPage />} />
          <Route path="/view-detail/history/:id" element={<ViewDetailHistoryPage />} />

          <Route path="/staff" element={<StaffPage />} />
          <Route path="/staff/view-staff" element={<StaffViewStaffPage />} />
          <Route path="/staff/view-feedback" element={<StaffViewFeedbackPage />} />
          <Route path="/staff/tasks" element={<StaffTaskPage />} />
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
