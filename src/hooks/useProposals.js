import { useQuery } from "@tanstack/react-query";
import { getProposal } from "../services/proposal";

export default function useProposals() {
  const queryKey = ["proposals"];
  const queryFn = getProposal;

  const { data, isLoading } = useQuery({ queryKey, queryFn });

  const { proposals } = data || {};

  return { isLoading, proposals };
}
