import http from "../configs/api";

function getOwnerProjects(data) {
  return http
    .get("/project/owner-projects", data)
    .then(({ data }) => data.data);
}

function removeOwnerProjects(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}

export { getOwnerProjects, removeOwnerProjects };
