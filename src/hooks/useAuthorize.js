import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthentication = false;
  if (user) isAuthentication = true;

  let isAuthorized = false;

  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };

  const desairedRole = pathname.split("/").at(1);

  if (Object.keys(ROLES).includes(desairedRole)) {
    if (user && user.role === ROLES[desairedRole]) isAuthorized = true;
  }

  return { isLoading, isAuthorized, isAuthentication, user, isVerified };
}
