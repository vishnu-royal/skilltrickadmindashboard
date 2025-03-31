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
import FrontendSettings from "./Pages/FrontendSettings";
import AiWriterCategories from "./Pages/AiWriterCategories";
import EditCategories from "./Pages/EditCategories";
import AddCategories from "./Pages/AddCategories";
import CustomTemplates from "./Pages/CustomTemplates";
import EditCustomTemplate from "./Pages/EditCustomTemplate";
import AddCustomTemplate from "./Pages/AddCustomTemplate";


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
            <Route path="/frontend-settings" element={<FrontendSettings />} />
            <Route path="/ai-writer-categories" element={<AiWriterCategories />} />
            <Route path="/edit-categories" element={<EditCategories />} />
            <Route path="/add-categories" element={<AddCategories />} />
            <Route path="/custom-template" element={<CustomTemplates />} />
            <Route path="/edit-custom-template" element={<EditCustomTemplate />} />
            <Route path="/add-custom-template" element={<AddCustomTemplate />} />

          </Routes>
    </Router>
  );
};

export default App;