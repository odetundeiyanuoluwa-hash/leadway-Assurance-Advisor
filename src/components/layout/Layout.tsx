import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../shared/WhatsAppButton";
import { StickyQuoteCTA } from "../shared/StickyQuoteCTA";
import { BackToTop } from "../shared/BackToTop";
import ScrollToTop from "../shared/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full overflow-x-hidden relative">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-24 pb-8 lg:pt-28">
        {children}
      </main>
      <Footer />
      
      {/* Global Overlays */}
      <WhatsAppButton />
      <StickyQuoteCTA />
      <BackToTop />
    </div>
  );
}
