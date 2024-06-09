import http from "../configs/api";

function sendOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

function getUser(data) {
  return http.get("/user/profile", data).then(({ data }) => data.data);
}

function getUsers() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

function logOut() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

function changeUserStatus({ userId, data }) {
  return http
    .patch(`/admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data);
}

export {
  sendOtp,
  checkOtp,
  completeProfile,
  getUser,
  logOut,
  getUsers,
  changeUserStatus,
};
