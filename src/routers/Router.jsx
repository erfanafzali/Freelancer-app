import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import CompleteProfilePage from "../pages/CompleteProfilePage";
import NotFound from "../components/modules/NotFound";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
