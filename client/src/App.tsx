import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Lazy load pages for code splitting (improves initial load time)
const NotFound = lazy(() => import("@/pages/NotFound"));
const Home = lazy(() => import("@/pages/Home"));
const AirConditioning = lazy(() => import("@/pages/services/AirConditioning"));
const SolarEnergy = lazy(() => import("@/pages/services/SolarEnergy"));
const HeatPumps = lazy(() => import("@/pages/services/HeatPumps"));
const TeslaPowerwall = lazy(() => import("@/pages/services/TeslaPowerwall"));
const Maintenance = lazy(() => import("@/pages/services/Maintenance"));
const Contact = lazy(() => import("@/pages/Contact"));

// Portuguese Pages
const HomePT = lazy(() => import("@/pages/pt/HomePT"));
const AirConditioningPT = lazy(() => import("@/pages/pt/services/AirConditioningPT"));
const SolarEnergyPT = lazy(() => import("@/pages/pt/services/SolarEnergyPT"));
const HeatPumpsPT = lazy(() => import("@/pages/pt/services/HeatPumpsPT"));
const TeslaPowerwallPT = lazy(() => import("@/pages/pt/services/TeslaPowerwallPT"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <Loader2 className="w-10 h-10 text-primary animate-spin" />
  </div>
);


function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/services/air-conditioning"} component={AirConditioning} />
        <Route path={"/services/solar-energy"} component={SolarEnergy} />
        <Route path={"/services/heat-pumps"} component={HeatPumps} />
        <Route path={"/services/tesla-powerwall"} component={TeslaPowerwall} />
        <Route path={"/services/maintenance"} component={Maintenance} />
        <Route path={"/contact"} component={Contact} />
        
        {/* Portuguese Routes */}
        <Route path="/pt-pt" component={HomePT} />
        <Route path="/pt-pt/ar-condicionado" component={AirConditioningPT} />
        <Route path="/pt-pt/energia-solar" component={SolarEnergyPT} />
        <Route path="/pt-pt/bombas-de-calor" component={HeatPumpsPT} />
        <Route path="/pt-pt/tesla-powerwall" component={TeslaPowerwallPT} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
