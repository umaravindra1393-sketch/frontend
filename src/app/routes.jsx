import { createBrowserRouter, Navigate, Outlet } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute';
import PageTransitionWrapper from './components/PageTransitionWrapper';
import ErrorBoundary from './components/ErrorBoundary';
import RootLayout from './components/RootLayout';
// Route configuration for Learnx application
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import AdminRequest from './pages/AdminRequest';
import About from './pages/About';
import Contact from './pages/Contact';
import Browse from './pages/Browse';
import BrowseCategory from './pages/BrowseCategory';
import HelpCenter from './pages/HelpCenter';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AdminDashboard from './pages/admin/AdminDashboard';
import UploadResource from './pages/admin/UploadResource';
import ResourceManagement from './pages/admin/ResourceManagement';
import UserAccessManagement from './pages/admin/UserAccessManagement';
import FeedbackReview from './pages/admin/FeedbackReview';
import AdminProfile from './pages/admin/AdminProfile';
import UserHome from './pages/user/UserHome';
import SearchResults from './pages/user/SearchResults';
import ResourceDetail from './pages/user/ResourceDetail';
import UserProfile from './pages/user/UserProfile';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to="/Learnx/User/Log-In" replace />
      },
      // User Login/Sign-Up Routes
      {
        path: "Learnx/User/Log-In",
        element: <PageTransitionWrapper duration={5000}><Login /></PageTransitionWrapper>
      },
      {
        path: "Learnx/User/Sign-In",
        element: <PageTransitionWrapper duration={5000}><Login /></PageTransitionWrapper>
      },
      {
        path: "Learnx/User/Sign-Up",
        element: <PageTransitionWrapper duration={5000}><Login /></PageTransitionWrapper>
      },
      // Admin Login/Sign-Up Routes
      {
        path: "Learnx/Admin/Log-In",
        element: <PageTransitionWrapper duration={5000}><Login /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Admin/Sign-Up",
        element: <PageTransitionWrapper duration={5000}><AdminRequest /></PageTransitionWrapper>
      },
      // Forgot Password Route
      {
        path: "Learnx/Auth/Forgot-Password",
        element: <PageTransitionWrapper duration={5000}><ForgotPassword /></PageTransitionWrapper>
      },
      // Legacy route for backward compatibility
      {
        path: "Learnx/Log-In",
        element: <Navigate to="/Learnx/User/Log-In" replace />
      },
      {
        path: "admin-request",
        element: <Navigate to="/Learnx/Admin/Sign-Up" replace />
      },
      {
        path: "Learnx/About/About-Us",
        element: <PageTransitionWrapper duration={5000}><About /></PageTransitionWrapper>
      },
      {
        path: "Learnx/About/Contact",
        element: <PageTransitionWrapper duration={5000}><Contact /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Contact/Contact-Us",
        element: <PageTransitionWrapper duration={5000}><Contact /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Resources/Browse",
        element: <PageTransitionWrapper duration={5000}><Browse /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Resources/Categories",
        element: <PageTransitionWrapper duration={5000}><BrowseCategory /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Browse-Category/:category",
        element: <PageTransitionWrapper duration={5000}><BrowseCategory /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Help-Center",
        element: <PageTransitionWrapper duration={5000}><HelpCenter /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Support/Help-Center",
        element: <PageTransitionWrapper duration={5000}><HelpCenter /></PageTransitionWrapper>
      },
      {
        path: "Learnx/FAQ",
        element: <PageTransitionWrapper duration={5000}><FAQ /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Support/FAQ",
        element: <PageTransitionWrapper duration={5000}><FAQ /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Privacy-Policy",
        element: <PageTransitionWrapper duration={5000}><Privacy /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Legal/Privacy",
        element: <PageTransitionWrapper duration={5000}><Privacy /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Terms-of-Service",
        element: <PageTransitionWrapper duration={5000}><Terms /></PageTransitionWrapper>
      },
      {
        path: "Learnx/Legal/Terms",
        element: <PageTransitionWrapper duration={5000}><Terms /></PageTransitionWrapper>
      },
      // Admin Routes
      {
        path: "Learnx/Admin/:name/:email/Dashboard",
        element: <ProtectedRoute role="admin"><PageTransitionWrapper duration={5000}><AdminDashboard /></PageTransitionWrapper></ProtectedRoute>
      },
      {
        path: "Learnx/Admin/:name/:email/Upload-Resource",
        element: <ProtectedRoute role="admin"><PageTransitionWrapper duration={5000}><UploadResource /></PageTransitionWrapper></ProtectedRoute>
      },
      {
        path: "Learnx/Admin/:name/:email/Resource-Management",
        element: <ProtectedRoute role="admin"><PageTransitionWrapper duration={5000}><ResourceManagement /></PageTransitionWrapper></ProtectedRoute>
      },
      {
        path: "Learnx/Admin/:name/:email/User-Access",
        element: <ProtectedRoute role="admin"><PageTransitionWrapper duration={5000}><UserAccessManagement /></PageTransitionWrapper></ProtectedRoute>
      },
      {
        path: "Learnx/Admin/:name/:email/Feedback-Review",
        element: <ProtectedRoute role="admin"><PageTransitionWrapper duration={5000}><FeedbackReview /></PageTransitionWrapper></ProtectedRoute>
      },
      {
        path: "Learnx/Admin/:name/:email/Profile",
        element: <ProtectedRoute role="admin"><PageTransitionWrapper duration={5000}><AdminProfile /></PageTransitionWrapper></ProtectedRoute>
      },
      // User Routes
      {
        path: "Learnx/User/:name/:email/Home",
        element: <ProtectedRoute role="user"><PageTransitionWrapper duration={5000}><UserHome /></PageTransitionWrapper></ProtectedRoute>
      },
      {
        path: "Learnx/User/:name/:email/Search",
        element: <ProtectedRoute role="user"><PageTransitionWrapper duration={5000}><SearchResults /></PageTransitionWrapper></ProtectedRoute>
      },
      {
        path: "Learnx/User/:name/:email/Resource/:id",
        element: <ProtectedRoute role="user"><PageTransitionWrapper duration={5000}><ResourceDetail /></PageTransitionWrapper></ProtectedRoute>
      },
      {
        path: "Learnx/User/:name/:email/Profile",
        element: <ProtectedRoute role="user"><PageTransitionWrapper duration={5000}><UserProfile /></PageTransitionWrapper></ProtectedRoute>
      }
    ]
  }
]);

