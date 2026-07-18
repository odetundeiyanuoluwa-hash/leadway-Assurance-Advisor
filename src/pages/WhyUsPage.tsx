import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";

export default function WhyUsPage() {
  useSEO({
    title: "Why Choose Leadway Assurance",
    description: "Discover why Leadway Assurance is Nigeria's most trusted insurer with over 54 years of excellence."
  });

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Why Choose Us" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">Why Choose Leadway?</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            For over five decades, we have been insuring the happiness of Nigerians. Here is why millions trust us.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="space-y-12">
            {[
              { title: "Financial Strength & Stability", desc: "With total assets exceeding ₦523.2 billion and shareholders' funds over ₦67.8 billion, we have the undisputed financial capacity to meet our obligations to you, no matter the scale." },
              { title: "Prompt Claims Settlement", desc: "We are renowned for our fast and transparent claims process. Legitimate, fully documented claims are settled within 48 hours. Your peace of mind is our priority." },
              { title: "54+ Years of Experience", desc: "Founded in 1970, we have weathered every economic cycle in Nigeria. This deep institutional experience means your investments and risks are managed by seasoned experts." },
              { title: "Comprehensive Product Portfolio", desc: "As a composite insurer, we offer a one-stop-shop for all your needs: Life, General, Health, and Annuity plans. You don't need multiple companies to protect your world." }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary text-primary font-black text-xl flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg pl-14 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-12 mt-12 md:mt-0">
            {[
              { title: "Regulatory Compliance", desc: "We are fully authorized and strictly regulated by the National Insurance Commission (NAICOM), ensuring that we operate within the highest standards of corporate governance." },
              { title: "Personalized Advisory Service", desc: "Our dedicated advisors provide bespoke advice tailored to your specific financial situation, not off-the-shelf products. Every client gets a personalized plan." },
              { title: "Technological Innovation", desc: "From our mobile app to online payments and telemedicine integrations in our health plans, we leverage technology to make insurance accessible and convenient." },
              { title: "Nationwide Reach", desc: "With branches across 30+ cities in Nigeria and a robust digital presence, we are always close to you wherever you are in the country." }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-black text-xl flex items-center justify-center flex-shrink-0">
                    {idx + 5}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg pl-14 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
        </div>

        <div className="mt-20 bg-primary text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Leadway Difference</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Join millions of satisfied Nigerians who sleep better knowing their future is secured by the best.
          </p>
          <Link href="/get-quote" className="inline-block px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full hover:bg-white hover:text-primary transition-colors text-lg">
            Get Started Today
          </Link>
        </div>
      </div>
    </Layout>
  );
}
