import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
// import MyEarnings from "../Pages/Dashboard/MyEarnings/MyEarnings";
// import MyApplications from "../Pages/MyApplications/MyApplications";

// import MainLayout from "../Layouts/MainLayout/MainLayout";
// import Homepage from "../Pages/HomePage/Homepage";
// import Tuitions from "../Pages/Tuitions/Tuitions";
// import Tutors from "../Pages/Tutors/Tutors";
// import About from "../Pages/About/About";
// import Contact from "../Pages/Contact/Contact";
// import Login from "../Pages/AuthPages/Login/Login";
// import Register from "../Pages/AuthPages/Register/Register";
// import PrivateRoute from "./PrivateRoute";

// import DashboardLayout from "../Layouts/MainLayout/DashboardLayout/DashboardLayout";
// import MyTuitions from "../Pages/Dashboard/MyTuitions/MyTuitions";
// import AddTuition from "../Pages/Dashboard/AddTuition/AddTuition";
// import AddTutorDetails from "../Pages/Dashboard/AddTutorDetails/AddTutorDetails";
// import TuitionDetails from "../Pages/Tuitions/TuitionDetails/TuitionDetails";

// import TutorDashboard from "../Pages/Dashboard/TutorDashboard/TutorDashboard";
// import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
// import ModifyUserRoles from "../Pages/Dashboard/AdminDashboard/ModifyUserRoles";
// import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
// import TuitionApplication from "../Pages/Dashboard/MyTuitions/TuitionApplication/TuitionApplication";
// import AdminRoute from "./AdminRoute";
// import Payment from "../Pages/Dashboard/Payment/Payment";
// import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
// import PaymentCancel from "../Pages/Dashboard/Payment/PaymentCancel";
// import PageNotFound from "../Components/Shared/ErrorPage/PageNotFound";
// import ManageTuitions from "../Pages/Dashboard/ManageTuitions/ManageTuitions";
// import ReportsAnalytics from "../Pages/Dashboard/ReportsAnalytics/ReportsAnalytics";
// import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory/PaymentHistory";
// import ProfileSettings from "../Pages/Dashboard/StudentDashboard/ProfileSettings/ProfileSettings";
// import TermsAndConditions from "../Components/Shared/TermsAndConditions/TermsAndConditions";
// import PrivacyPolicy from "../Components/Shared/PrivacyPolicy/PrivacyPolicy";
// import CookiePolicy from "../Components/Shared/CookiePolicy/CookiePolicy";

const MainLayout = lazy(() => import("../Layouts/MainLayout/MainLayout"));
const Homepage = lazy(() => import("../Pages/HomePage/Homepage"));
const Tuitions = lazy(() => import("../Pages/Tuitions/Tuitions"));
const Tutors = lazy(() => import("../Pages/Tutors/Tutors"));
const About = lazy(() => import("../Pages/About/About"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Login = lazy(() => import("../Pages/AuthPages/Login/Login"));
const Register = lazy(() => import("../Pages/AuthPages/Register/Register"));
const TuitionDetails = lazy(
  () => import("../Pages/Tuitions/TuitionDetails/TuitionDetails"),
);

const DashboardLayout = lazy(
  () => import("../Layouts/MainLayout/DashboardLayout/DashboardLayout"),
);
const MyTuitions = lazy(
  () => import("../Pages/Dashboard/MyTuitions/MyTuitions"),
);
const MyApplications = lazy(
  () => import("../Pages/MyApplications/MyApplications"),
);
const AddTuition = lazy(
  () => import("../Pages/Dashboard/AddTuition/AddTuition"),
);
const MyEarnings = lazy(
  () => import("../Pages/Dashboard/MyEarnings/MyEarnings"),
);
const AddTutorDetails = lazy(
  () => import("../Pages/Dashboard/AddTutorDetails/AddTutorDetails"),
);

const AdminDashboard = lazy(
  () => import("../Pages/Dashboard/AdminDashboard/AdminDashboard"),
);
const ModifyUserRoles = lazy(
  () => import("../Pages/Dashboard/AdminDashboard/ModifyUserRoles"),
);
const ManageUsers = lazy(
  () => import("../Pages/Dashboard/ManageUsers/ManageUsers"),
);
const TuitionApplication = lazy(
  () =>
    import("../Pages/Dashboard/MyTuitions/TuitionApplication/TuitionApplication"),
);
const Payment = lazy(() => import("../Pages/Dashboard/Payment/Payment"));
const PaymentSuccess = lazy(
  () => import("../Pages/Dashboard/Payment/PaymentSuccess"),
);
const PaymentCancel = lazy(
  () => import("../Pages/Dashboard/Payment/PaymentCancel"),
);
const ManageTuitions = lazy(
  () => import("../Pages/Dashboard/ManageTuitions/ManageTuitions"),
);
const ReportsAnalytics = lazy(
  () => import("../Pages/Dashboard/ReportsAnalytics/ReportsAnalytics"),
);
const PaymentHistory = lazy(
  () => import("../Pages/Dashboard/Payment/PaymentHistory/PaymentHistory"),
);
const ProfileSettings = lazy(
  () =>
    import("../Pages/Dashboard/StudentDashboard/ProfileSettings/ProfileSettings"),
);
const TermsAndConditions = lazy(
  () => import("../Components/Shared/TermsAndConditions/TermsAndConditions"),
);
const PrivacyPolicy = lazy(
  () => import("../Components/Shared/PrivacyPolicy/PrivacyPolicy"),
);
const CookiePolicy = lazy(
  () => import("../Components/Shared/CookiePolicy/CookiePolicy"),
);
const PageNotFound = lazy(
  () => import("../Components/Shared/ErrorPage/PageNotFound"),
);

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
      {
        path: "/terms-and-conditions",
        Component: TermsAndConditions,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
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
        path: "my-applications",
        Component: MyApplications,
      },
      {
        path: "my-earnings",
        Component: MyEarnings,
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
