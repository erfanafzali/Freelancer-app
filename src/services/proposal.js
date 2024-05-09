import http from "../configs/api";

function changeProposalStatus({ id, data }) {
 return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}

export { changeProposalStatus };
