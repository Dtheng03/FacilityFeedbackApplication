// api lay du lieu trong database
export const getAllCampus = "http://localhost:8080/api/campus";
export const getAllFloor = "http://localhost:8080/api/floor/view";
export const getAllRoom = "http://localhost:8080/api/room/view";
export const getAllFacility = "http://localhost:8080/api/facility/get-all";
export const getAllFacilityProblem = "http://localhost:8080/api/facilityProblem/get-all";

// api feedback
export const createFeedback = "http://localhost:8080/api/feedback/create";
export const getFeedbackByCampusId = (campusId) => {
    return `http://localhost:8080/api/feedback/getAll/${campusId}`;
};
export const getFeedbackById = (id) => {
    return `http://localhost:8080/api/feedback/get-feedback/${id}`;
};
export const assign = (feedbackId) => {
    return `http://localhost:8080/api/feedback/assign/${feedbackId}`;
}
export const viewFBbyStaffIdTrue = (staffId) => {
    return `http://localhost:8080/api/feedback/get-feedback-by-staff-true/${staffId}`;
}
export const viewFBbyStaffIdFalse = (staffId) => {
    return `http://localhost:8080/api/feedback/get-feedback-by-staff-false/${staffId}`;
}
export const viewFBbyStaffId = (staffId) => {
    return `http://localhost:8080/api/feedback/get-feedback-by-staffId/${staffId}`;
}

// api staff
export const login = "http://localhost:8080/api/staff/login";
export const addStaff = "http://localhost:8080/api/staff/add";
export const getStaffByCampusId = (campusId) => {
    return `http://localhost:8080/api/staff/getAllByCampusId/${campusId}`;
};
// tra ve campus id
export const getStaffById = (id) => {
    return `http://localhost:8080/api/staff/findStaff/${id}`;
};
// tra ve campus name
export const getStaffByStaffId = (id) => {
    return `http://localhost:8080/api/staff/find/${id}`;
};
export const updateStaffById = (id) => {
    return `http://localhost:8080/api/staff/update/${id}`;
};
export const deleteStaffById = (id) => {
    return `http://localhost:8080/api/staff/delete${id}`;
};

// api repair history
export const addRepairHistory = "http://localhost:8080/api/repair/create";
export const getAllRepairHistory = "http://localhost:8080/api/repair/viewAll";
export const getAllRepairHistoryByCampusId = (id) => {
    return `http://localhost:8080/api/repair/viewAll/${id}`;
}
export const getRepairHistoryById = (id) => {
    return `http://localhost:8080/api/repair/find/id?id=${id}`;
};

export const getRoomByCampusId = (id) => {
    return `http://localhost:8080/api/room/get-all/${id}`;
}

export const getFloorByCampusId = (id) => {
    return `http://localhost:8080/api/floor/find/${id}`;
}

export const getRoomType = "http://localhost:8080/api/room-type/view";

export const addRoom = "http://localhost:8080/api/room/create";

export const deleteRoom = (id) => {
    return `http://localhost:8080/api/room/delete/${id}`;
}

export const findRoomById = (id) => {
    return `http://localhost:8080/api/room/find/${id}`;
}

export const updateRoom = (id) => {
    return `http://localhost:8080/api/room/update/${id}`
}

export const viewFacility = "http://localhost:8080/api/facility/view";
export const viewProblem = "http://localhost:8080/api/facilityProblem/view-all";

export const addRoomType = "http://localhost:8080/api/room-type/create";

export const getAllFacilityType = "http://localhost:8080/api/facility-type/view";

export const viewAllFacilityType = "http://localhost:8080/api/facility-type/view-all";

export const addFacility = "http://localhost:8080/api/facility/create";

export const updateFacility = (id) => {
    return `http://localhost:8080/api/facility/update/${id}`;
}

export const findFacilityById = (id) => {
    return `http://localhost:8080/api/facility/find/{id}?id=${id}`;
}

export const addFacilityType = "http://localhost:8080/api/facility-type/create";

export const addFacilityProblem = "http://localhost:8080/api/facilityProblem/create";

export const countFeedBack = (startDate, endDate) => {
    return `http://localhost:8080/api/feedback/view-report?startDate=${startDate}&endDate=${endDate}`;
}

export const countFeedBackTrue = (startDate, endDate) => {
    return `http://localhost:8080/api/feedback/view-report-true?startDate=${startDate}&endDate=${endDate}`
}

export const countFeedBackFalse = (startDate, endDate) => {
    return `http://localhost:8080/api/feedback/view-report-false?startDate=${startDate}&endDate=${endDate}`
}

export const report = (startDate, endDate, campusId) => {
    return `http://localhost:8080/api/feedback/report?startDate=${startDate}&endDate=${endDate}&campusId=${campusId}`;
}

export const reportProblem = (startDate, endDate, campusId) => {
    return `http://localhost:8080/api/facilityProblem/report-problem?startDate=${startDate}&endDate=${endDate}&campusId=${campusId}`;
}

export const reportRepair = (startDate, endDate, campusId) => {
    return `http://localhost:8080/api/repair/view-repair-history?campusId=${campusId}&startDate=${startDate}&endDate=${endDate}`;
}