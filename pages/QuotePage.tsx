import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { LeadForm } from "@/components/shared/LeadForm";
import { FaWhatsapp } from "react-icons/fa";

export default function QuotePage() {
  useSEO({
    title: "Get a Free Ansurance Quote | Leadway Assurance",
    description: "Request a personalized insurance quote from Leadway Assurance. Life, Health, and General insurance quotes sent directly via WhatsApp and email."
  });

  return (
    <Layout>
      {/* Header */}
      <div className="relative bg-primary/5 py-12 md:py-16 border-b border-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=60)" }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Get a Quote" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Get Your Free Quote</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Fill out the form below and receive a personalized quotation via WhatsApp and email. It takes less than 2 minutes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          {/* Form */}
          <div className="lg:col-span-8">
            <LeadForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-bold text-lg mb-4">Why request a quote?</h3>
              <ul className="space-y-4">
                {[
                  { label: "Instant WhatsApp delivery", desc: "Quote details sent to our advisor via WhatsApp instantly." },
                  { label: "Email confirmation", desc: "Full quote request emailed for your records." },
                  { label: "Personalized response", desc: "Get a tailored premium based on your age and needs." },
                  { label: "No obligation", desc: "It's 100% free and you're under no obligation to buy." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</div>
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">{item.label}:</strong> {item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary p-6 md:p-8 rounded-2xl text-secondary-foreground">
              <h3 className="font-bold text-lg mb-2">Prefer to speak directly?</h3>
              <p className="mb-5 opacity-90 text-sm leading-relaxed">Our advisors are available on call and WhatsApp — Monday to Saturday.</p>
              <a href="tel:07048495763" className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white text-primary text-center font-bold rounded-lg mb-3 hover:bg-gray-50 transition-colors text-sm">
                📞 Call 070 4849 5763
              </a>
              <a href="https://wa.me/2347030770719?text=Hello%20Leadway%2C%20I%20need%20a%20quote." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] text-white text-center font-bold rounded-lg hover:bg-[#20b858] transition-colors text-sm">
                <FaWhatsapp className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Regulated &amp; Trusted</p>
              <div className="flex flex-wrap gap-2">
                {["NAICOM Reg. No. 025", "54+ Years Operating", "₦523.2B Total Assets", "1M+ Customers"].map((badge, i) => (
                  <span key={i} className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
