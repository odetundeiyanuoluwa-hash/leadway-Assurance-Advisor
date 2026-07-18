import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";

export function StickyQuoteCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-card border-t border-border p-3 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 flex gap-2 border-primary text-primary" asChild>
          <a href="tel:07048495763">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </Button>
        <Button className="flex-1 flex gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
          <Link href="/get-quote">
            <FileText className="w-4 h-4" />
            Get Quote
          </Link>
        </Button>
      </div>
    </div>
  );
}
