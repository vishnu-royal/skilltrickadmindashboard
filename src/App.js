import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import Index from "./Pages/Index";
import Plans from "./Pages/Plans";
import UserDashbaord from "./Pages/UserDashbaord";
import OnboardingPro from "./Pages/OnboardingPro";
import SupportRequests from "./Pages/SupportRequests";
import AuthSettings from "./Pages/AuthSettings";
import AddChatCategories from "./Pages/AddChatCategories";
import EditChatCategories from "./Pages/EditChatCategories";
import ChatCategories from "./Pages/ChatCategories";


const App = () => {
  return (
    <Router>
        <Header />
        <Sidebar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/user-dashbaord" element={<UserDashbaord />} />
            <Route path="/onboarding-pro" element={<OnboardingPro />} />
            <Route path="/support-requests" element={<SupportRequests />} />
            <Route path="/auth-settings" element={<AuthSettings />} />
            <Route path="/add-chat-categories" element={<AddChatCategories />} />
            <Route path="/edit-chat-categories" element={<EditChatCategories />} />
            <Route path="/chat-categories" element={<ChatCategories />} />

          </Routes>
    </Router>
  );
};

export default App;