import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import CompleteProfilePage from "../pages/CompleteProfilePage";
import NotFound from "../components/modules/NotFound";
import OwnerPage from "../pages/OwnerPage";
import Projects from "../features/projects/Projects";
import ProjectPage from "../pages/ProjectPage";
import OwnerLayout from "../layouts/OwnerLayout";

import FreelancerDashboard from "../features/freelancer/FreelancerDashboard";
import Proposals from "../features/freelancer/Proposals";
import SubmittedProjects from "../features/freelancer/SubmittedProjects";
import FreelancerLayout from "../layouts/FreelancerLayout";
import ProtectRoute from "./ProtectRoute";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../features/admin/AdminDashboard";
import UserPage from "../pages/UserPage";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route
          path="/owner"
          element={
            <ProtectRoute>
              <OwnerLayout />
            </ProtectRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<OwnerPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectPage />} />
        </Route>
        <Route
          path="/freelancer"
          element={
            <ProtectRoute>
              <FreelancerLayout />
            </ProtectRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<FreelancerDashboard />} />
          <Route path="proposals" element={<Proposals />} />
          <Route path="projects" element={<SubmittedProjects />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        <Route
          path="/admin"
          element={
            <ProtectRoute>
              <AdminLayout />
            </ProtectRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<UserPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;

//* authentication ==> who is he/she ? , name...?
//* authorized ==> persmission ,access to route or file
