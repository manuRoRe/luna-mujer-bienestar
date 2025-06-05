
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CalendarPage from "./pages/Calendar";
import ProfilePage from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ConsejosPage from "./pages/Consejos";
import ConsejoDetallePage from "./pages/ConsejoDetalle";
import EmailVerification from "./pages/EmailVerification";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users"; 
import AdminPeriods from "./pages/admin/Periods";
import AdminSymptoms from "./pages/admin/Symptoms";
import AdminReminders from "./pages/admin/Reminders";
import AdminTips from "./pages/admin/Tips";
import AdminLayout from "./pages/admin/AdminLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/consejos" element={<ConsejosPage />} />
          <Route path="/consejo/:id" element={<ConsejoDetallePage />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="periods" element={<AdminPeriods />} />
            <Route path="symptoms" element={<AdminSymptoms />} />
            <Route path="reminders" element={<AdminReminders />} />
            <Route path="tips" element={<AdminTips />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
