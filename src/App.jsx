import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Signin from "./components/Organizer/Signin";
import Home from "./components/Home";
import VendorSignin from "./components/Vendor/VendorSignin";
import UserSignin from "./components/User/UserSignin";
import OrgDash from "./components/Organizer/OrgDash";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Organizer/Profile";
import Settings from "./components/Organizer/Settings";
import NotFound from "./components/NotFound"; // Import Error Page
import Caterers from "./components/Organizer/Caterers"
import Photographers from "./components/Organizer/Photographers"
import Venues from "./components/Organizer/Venues"
import EventRequests from "./components/Organizer/EventRequests"
import Logout from "./components/Organizer/Logout";
import RegisterEM from "./components/Organizer/RegisterEM";
import VendorDash from "./components/Vendor/VendorDash";
import VendorProfile from "./components/Vendor/VendorProfile";
import VendorSettings from "./components/Vendor/VendorSettings";
import VendorOrders from "./components/Vendor/VendorOrders";
import ForgotPass from "./components/ForgotPass"
import VLogout from "./components/Vendor/VLogout";
import VendorEventReq from "./components/Vendor/VendorEventReq";
import UserSignUp from "./components/User/UserSignUp";
import Organizers from "./components/Organizers";
import HomePage from "./components/User/HomePage";
import ULogout from "./components/User/ULogout"
import Messages from "./components/User/Messages";
import UserProfile from "./components/User/UserProfile";
import UserBookings from "./components/User/UserBookings";
import UserSettings from "./components/User/UserSettings";
import CreateEvent from "./components/User/CreateEvent";
import OMessages from "./components/Organizer/OMessages"
import EventDetails from "./components/Organizer/EventDetails";
function App() {
  const location = useLocation();
  //localStorage.clear();
  return (
    <>
      {/* Show NavBar unless user is on /Dashboard or its subpaths */}
      {/* {!location.pathname.startsWith("/Dashboard") && <NavBar />} */}
      {!["/Dashboard", "/My-Dashboard", "/index"].some(path => location.pathname.startsWith(path)) && <NavBar />}

      <Routes>
       
<Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/vendor-signin" element={<VendorSignin />} />
        <Route path="/user-signin" element={<UserSignin />} />
        <Route path="/user-signup" element={<UserSignUp />} />

        <Route path="/register" element={<RegisterEM />} />
          <Route path="forgot-password" element={<ForgotPass />} />

        {/* Protected Dashboard Route with Nested Routes - Event Organizer */}
        <Route path="/Dashboard" element={<ProtectedRoute />}>
          <Route index element={<OrgDash />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="caterers" element={<Caterers />} />
          <Route path="messages" element={<OMessages />} />
          <Route path="photographers" element={<Photographers />} />
          <Route path="venues" element={<Venues />} />
          <Route path="event-requests" element={<EventRequests />} />
          <Route path="logout" element={<Logout />} />
          <Route path="events" element={<EventDetails />} />
        </Route>

        {/* Protected Dashboard Route with Nested Routes - Service Providers */}
        <Route path="/My-Dashboard" element={<ProtectedRoute />}>
          <Route index element={<VendorDash />} />
          <Route path="requests" element={<VendorEventReq />} />
          <Route path="profile" element={<VendorProfile />} />
          <Route path="orders" element={<VendorOrders />} />
          <Route path="settings" element={<VendorSettings />} />
          <Route path="logout" element={<VLogout />} />
         
        </Route>
        {/* Protected Dashboard Route with Nested Routes - users */}
        <Route path="/index" element={<ProtectedRoute />}>
          <Route index element={<HomePage />} />
          <Route path="Profile" element={<UserProfile />} />
          <Route path="Messages" element={<Messages />} />
          <Route path="Organizers" element={<Organizers />} />
          <Route path="Logout" element={<ULogout />} />
          <Route path="Bookings" element={<UserBookings />} />
          <Route path="Settings" element={<UserSettings />} />
          <Route path="create-event" element={<CreateEvent />} />
         
        </Route>

        {/* Catch-All Route for Unknown Paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
