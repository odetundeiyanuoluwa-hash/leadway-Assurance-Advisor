import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { FileText, Clock, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClaimsPage() {
  useSEO({
    title: "Make a Claim",
    description: "Learn about the Leadway Assurance claims process. Fast, transparent 48-hour claims settlement."
  });

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Claims" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">Claims Process</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            We deliver on our promise when you need us most. Our streamlined process ensures legitimate claims are settled within 48 hours.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        
        {/* The Promise */}
        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">The Leadway Promise</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              At Leadway Assurance, we believe that an insurance policy is only as good as the claims service that backs it up. We are committed to processing and paying all properly documented claims within 48 hours.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-secondary flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-secondary">48h</span>
              <span className="text-sm font-medium">Settlement</span>
            </div>
          </div>
        </div>

        {/* How to claim */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">How to Make a Claim</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: PhoneCall, title: "1. Notify Us", desc: "Contact me or the Leadway claims team immediately an incident occurs." },
              { icon: FileText, title: "2. Get Forms", desc: "We will provide you with the necessary claim forms for your specific policy." },
              { icon: Clock, title: "3. Submit Docs", desc: "Submit the completed forms along with required supporting evidence." },
              { icon: CheckCircle2, title: "4. Settlement", desc: "Once verified, payment is processed directly to your account within 48 hrs." }
            ].map((step, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl border border-border shadow-sm relative text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Required Docs */}
          <div>
            <h3 className="text-2xl font-bold mb-6">General Documents Required</h3>
            <div className="bg-muted/30 p-6 rounded-2xl border border-border">
              <p className="text-sm text-muted-foreground mb-4">Specific documents vary by claim type, but generally include:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Completed Claim Form</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Original Policy Document / Schedule</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Proof of Loss (Pictures, Video, Invoices)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Police Report (for theft, accidents, malicious damage)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Medical Report / Death Certificate (for life/health claims)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Assistance */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Need Claim Assistance?</h3>
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm h-full flex flex-col justify-center">
              <p className="mb-6 text-muted-foreground">
                Our dedicated advisors are with you beyond the point of sale. We guide you through the entire claims process to ensure a smooth and hassle-free settlement.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 font-medium">
                  <PhoneCall className="w-5 h-5 text-primary" />
                  <span>Leadway 24/7 Line: <a href="tel:012700700" className="text-primary hover:underline">01-2700700</a></span>
                </div>
              </div>
              <Button asChild className="w-full">
                <a href="mailto:ia.leadway@gmail.com?subject=Claim%20Assistance%20Request">Request Claims Assistance</a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
