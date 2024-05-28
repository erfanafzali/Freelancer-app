import http from "../configs/api";

function changeProposalStatus({ proposalId, ...data }) {
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
}

function getProposal() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

function createProposal(data) {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}

export { changeProposalStatus, getProposal, createProposal };
