
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CursoLanding from "./pages/CursoLanding";
import PowerBILanding from "./pages/PowerBILanding";
import MonetizzeLanding from "./pages/MonetizzeLanding";
import MetabolismLanding from "./pages/MetabolismLanding";
import LiverGuide from "./pages/LiverGuide";
import HearingLanding from "./pages/HearingLanding";
import GlucoExtendLanding from "./pages/GlucoExtendLanding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/metabolism" element={<MetabolismLanding />} />
          <Route path="/liver-guide" element={<LiverGuide />} />
          <Route path="/hearing-guide" element={<HearingLanding />} />
          <Route path="/gluco-extend" element={<GlucoExtendLanding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
