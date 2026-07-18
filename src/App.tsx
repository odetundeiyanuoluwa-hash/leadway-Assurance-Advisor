import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from 'next-themes';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';
import ClaimsPage from './pages/ClaimsPage';
import FaqPage from './pages/FaqPage';
import TestimonialsPage from './pages/TestimonialsPage';
import WhyUsPage from './pages/WhyUsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/:slug" component={ProductDetailPage} />
      <Route path="/get-quote" component={QuotePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/claims" component={ClaimsPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/why-us" component={WhyUsPage} />
      <Route path="/privacy-policy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/sitemap" component={SitemapPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
