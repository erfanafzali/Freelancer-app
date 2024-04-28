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

export { getOwnerProjects, removeOwnerProjects, createProject, editProject };
