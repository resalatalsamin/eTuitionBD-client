import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Homepage from "../Pages/HomePage/Homepage";
import Tuitions from "../Pages/Tuitions/Tuitions";
import Tutors from "../Pages/Tutors/Tutors";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/AuthPages/Login/Login";
import Register from "../Pages/AuthPages/Register/Register";
import PrivateRoute from "./PrivateRoute";

import DashboardLayout from "../Layouts/MainLayout/DashboardLayout/DashboardLayout";
import MyTuitions from "../Pages/Dashboard/MyTuitions/MyTuitions";
import AddTuition from "../Pages/Dashboard/AddTuition/AddTuition";
import AddTutorDetails from "../Pages/Dashboard/AddTutorDetails/AddTutorDetails";
import TuitionDetails from "../Pages/Tuitions/TuitionDetails/TuitionDetails";

import TutorDashboard from "../Pages/Dashboard/TutorDashboard/TutorDashboard";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import ModifyUserRoles from "../Pages/Dashboard/AdminDashboard/ModifyUserRoles";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import TuitionApplication from "../Pages/Dashboard/MyTuitions/TuitionApplication/TuitionApplication";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancel from "../Pages/Dashboard/Payment/PaymentCancel";
import PageNotFound from "../Components/Shared/ErrorPage/PageNotFound";
import ManageTuitions from "../Pages/Dashboard/ManageTuitions/ManageTuitions";
import ReportsAnalytics from "../Pages/Dashboard/ReportsAnalytics/ReportsAnalytics";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory/PaymentHistory";
import ProfileSettings from "../Pages/Dashboard/StudentDashboard/ProfileSettings/ProfileSettings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Homepage,
      },
      {
        path: "/tuitions",
        Component: Tuitions,
      },
      {
        path: "/tutors",
        Component: Tutors,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/tuition-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tuition-details/${params.id}`),
        Component: TuitionDetails,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-tuitions",
        Component: MyTuitions,
      },
      {
        path: "profile-settings",
        Component: ProfileSettings,
      },
      {
        path: "add-tuition",
        Component: AddTuition,
      },
      {
        path: "add-tutor-details",
        Component: AddTutorDetails,
      },
      {
        path: "modify-user-roles",
        Component: ModifyUserRoles,
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "tuition-applications/:id",
        Component: TuitionApplication,
      },
      {
        path: "payment/:applicationId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancel,
      },
      {
        path: "manage-tuitions",
        Component: ManageTuitions,
      },
      {
        path: "reports",
        Component: ReportsAnalytics,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);
