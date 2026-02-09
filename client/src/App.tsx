import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/layout/ScrollToTop";

// Pages
import Home from "@/pages/home";
import Partners from "@/pages/partners";
import Clients from "@/pages/clients";
import Pricing from "@/pages/pricing";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import BookDemo from "@/pages/book-demo";
import SACanegrowersCaseStudy from "@/pages/case-studies/sa-canegrowers";
import TalksureCaseStudy from "@/pages/case-studies/talksure";
import LawdCaseStudy from "@/pages/case-studies/lawd";

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/partners" component={Partners} />
        <Route path="/clients" component={Clients} />
        <Route path="/case-studies/sa-canegrowers" component={SACanegrowersCaseStudy} />
        <Route path="/case-studies/talksure" component={TalksureCaseStudy} />
        <Route path="/case-studies/lawd" component={LawdCaseStudy} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/book-demo" component={BookDemo} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
