import { useNavigate } from "react-router-dom";
import useAuthorize from "../hooks/useAuthorize";
import { useEffect } from "react";
import Loader from "../components/modules/Loader";
import toast from "react-hot-toast";

function ProtectRoute({ children }) {
  const navigate = useNavigate();

  //* 1-Loud the authentication user
  const { isAuthorized, isAuthentication, isLoading, isVerified } =
    useAuthorize();

  //* 2-Check is authorized or not Check is authentication or not
  useEffect(() => {
    if (!isAuthentication && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthentication, isAuthorized, isLoading, navigate, isVerified]);

  //* 3- While loading ==> show loading
  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loader />
      </div>
    );

  //* if user is authenticated and authorized return the app
  if (isAuthentication && isAuthorized) return children;
}

export default ProtectRoute;
