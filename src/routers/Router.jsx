import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import CompleteProfilePage from "../pages/CompleteProfilePage";
import NotFound from "../components/modules/NotFound";
import OwnerPage from "../pages/OwnerPage";
import LayoutOwner from "../layouts/LayoutOwner";
import Projects from "../features/projects/Projects";
import MyProject from "../features/project/MyProject";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route path="/owner" element={<LayoutOwner />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<OwnerPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<MyProject />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
