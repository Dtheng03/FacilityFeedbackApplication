// api lay du lieu trong database
export const getAllCampus = "http://localhost:8080/api/campus";
export const getAllFloor = "http://localhost:8080/api/floor";
export const getAllRoom = "http://localhost:8080/api/room";
export const getAllFacility = "http://localhost:8080/api/facility";
export const getAllFacilityProblem = "http://localhost:8080/api/facilityProblem";

// api feedback
export const createFeedback = "http://localhost:8080/api/feedback/create";
export const getFeedbackByCampusId = (campusId) => {
    return `http://localhost:8080/api/feedback/getAll/${campusId}`;
};
export const getFeedbackById = (id) => {
    return `http://localhost:8080/api/feedback/get-feedback/${id}`;
};

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
export const getRepairHistoryById = (id) => {
    return `http://localhost:8080/api/repair/find/id?id=${id}`;
};