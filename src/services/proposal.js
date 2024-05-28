import http from "../configs/api";

function changeProposalStatus({ id, data }) {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}

function getProposal() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}
export { changeProposalStatus, getProposal };
