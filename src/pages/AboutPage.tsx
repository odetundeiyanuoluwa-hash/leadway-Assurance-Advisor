import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Shield, Target, Eye, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
  useSEO({
    title: "About Leadway Assurance | Nigeria's Leading Insurer",
    description: "Learn about Leadway Assurance's 54+ year history of insuring happiness in Nigeria. Nigeria's foremost composite insurance company since 1970."
  });

  return (
    <Layout>
      {/* Hero */}
      <div className="relative bg-primary/5 py-12 md:py-20 border-b border-border overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=60)" }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "About" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">About Leadway Assurance</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Nigeria's most trusted composite insurer — partnering with individuals, families, and businesses to provide expert financial advisory and tailored risk management solutions since 1970.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20">

        {/* Advisor Profile */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center mb-16 md:mb-24">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-border aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&auto=format&fit=crop&q=80"
                alt="Leadway Assurance financial advisory team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Our Advisory Team</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Expert Guidance, Personalized Service</h2>
            <h3 className="text-lg font-semibold text-secondary mb-5">Authorized Financial Advisors — Leadway Assurance</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our team of dedicated financial advisors works closely with individuals, families, and businesses across Nigeria to navigate the complexities of financial planning and risk management.
              </p>
              <p>
                Insurance is not just about buying a policy — it's about buying peace of mind. Whether you are looking to secure your child's education, protect your business assets, or plan for a comfortable retirement, we provide personalized advisory services to ensure you select the plan that perfectly aligns with your goals and budget.
              </p>
              <p>
                We pride ourselves on integrity, transparency, and exceptional customer service — being there for our clients not just when they purchase a policy, but crucially, when they need to make a claim.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary" asChild>
                <a href="https://wa.me/2347030770719" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Leadway Corporate Profile */}
        <div className="bg-white dark:bg-card rounded-3xl p-6 md:p-12 border border-border shadow-sm mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">About Leadway Assurance</h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Founded in 1970 by Sir (Dr.) Hassan O. Odukale, Leadway Assurance Company Limited has built a sterling reputation over five decades to become Nigeria's foremost composite insurance company.
              </p>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Authorized and regulated by the National Insurance Commission (NAICOM), we offer comprehensive life, general, and health insurance solutions, alongside pension management and allied financial services.
              </p>

              <h3 className="text-lg font-bold text-foreground mb-4 mt-6">Corporate Facts</h3>
              <ul className="space-y-2.5">
                {[
                  "Shareholders' Funds: Over ₦67.8 Billion",
                  "Total Assets: Over ₦523.2 Billion",
                  "Premium Income: Over ₦54.4 Billion",
                  "Investment Portfolio: Over ₦322 Billion",
                  "Network: Nationwide presence in 30+ cities",
                  "NAICOM Registration No. 025",
                ].map((fact, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-foreground text-sm">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-video mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?w=700&auto=format&fit=crop&q=80"
                  alt="Leadway Assurance corporate building Lagos"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">To be a leading insurance company and non-banking financial solutions provider in Nigeria, leveraging on our strategic capabilities in other selected markets.</p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">To be a service provider of choice, bringing insurance as a risk management tool to the consciousness of all, adding value to our clients, and guaranteeing superior returns to stakeholders.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Our Core Values (iSCORE)</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">These values define our corporate culture and guide every interaction we have with our clients.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { letter: "I", word: "Integrity", desc: "We are honest and transparent in all our dealings." },
              { letter: "S", word: "Service", desc: "We are committed to exceptional service delivery." },
              { letter: "C", word: "Customer Focus", desc: "The customer is at the center of everything we do." },
              { letter: "O", word: "Openness", desc: "We maintain open communication with all stakeholders." },
              { letter: "R", word: "Respect", desc: "We respect every individual we interact with." },
              { letter: "E", word: "Excellence", desc: "We strive for excellence in our products and services." },
            ].map((value, idx) => (
              <div key={idx} className="bg-card p-5 rounded-2xl border border-border flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-black text-xl flex items-center justify-center flex-shrink-0">
                  {value.letter}
                </div>
                <div>
                  <h4 className="font-bold text-base text-primary mb-1">{value.word}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-16 md:mt-24 bg-primary text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&auto=format&fit=crop&q=60)" }}
          />
          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted. Regulated. Award-Winning.</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Leadway Assurance has received numerous industry awards for innovation, customer service excellence, and financial stability over its 54-year history.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary font-bold rounded-full px-7" asChild>
                <Link href="/get-quote">Get a Free Quote Today</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold rounded-full px-7" asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
