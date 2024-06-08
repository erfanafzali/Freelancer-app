import http from "../configs/api";

function getOwnerProjects(data) {
  return http
    .get("/project/owner-projects", data)
    .then(({ data }) => data.data);
}

function removeOwnerProjects(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}

function createProject(data) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}

function editProject({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}

function toggleProjectStatus({ id, data }) {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}

function getProject(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}

function getProjects(queryString) {
  return http.get(`/project/list${queryString}`).then(({ data }) => data.data);
}

export {
  getOwnerProjects,
  removeOwnerProjects,
  createProject,
  editProject,
  toggleProjectStatus,
  getProject,
  getProjects,
};
