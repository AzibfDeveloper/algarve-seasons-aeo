import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AirConditioning from "./pages/services/AirConditioning";
import SolarEnergy from "./pages/services/SolarEnergy";
import HeatPumps from "./pages/services/HeatPumps";
import TeslaPowerwall from "./pages/services/TeslaPowerwall";
import Maintenance from "./pages/services/Maintenance";
import Contact from "./pages/Contact";
import AirConditioningPT from "./pages/pt/services/AirConditioningPT";
import SolarEnergyPT from "./pages/pt/services/SolarEnergyPT";
import HeatPumpsPT from "./pages/pt/services/HeatPumpsPT";
import TeslaPowerwallPT from "./pages/pt/services/TeslaPowerwallPT";
import HomePT from "./pages/pt/HomePT";


function Router() {
  return (
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
