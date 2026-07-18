import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { Phone, ArrowRight, Shield, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { StatCounter } from "@/components/shared/StatCounter";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { HeroSlider } from "@/components/shared/HeroSlider";
import { TestimonialsSlider } from "@/components/shared/TestimonialsSlider";
import { ProductsCarousel } from "@/components/shared/ProductsCarousel";

export default function HomePage() {
  useSEO({
    title: "Leadway Assurance | Insuring Happiness Since 1970",
    description:
      "Nigeria's leading composite insurer. Get quotes for Life, Health, and General insurance from Leadway Assurance — trusted by over 1 million Nigerians.",
    keywords:
      "Leadway Assurance, Insurance Nigeria, Life Insurance, Health Insurance, Motor Insurance, NAICOM",
  });

  return (
    <Layout>
      {/* ── Hero Slider ── */}
      <HeroSlider />

      {/* ── Stats ── */}
      <section className="py-12 -mt-4 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            <StatCounter end={54} suffix="+" label="Years Experience" />
            <StatCounter end={523} prefix="₦" suffix="B+" label="Total Assets" />
            <StatCounter end={1} suffix="M+" label="Customers Served" />
            <StatCounter end={35} suffix="+" label="Insurance Products" />
          </div>
        </div>
      </section>

      {/* ── Category Cards ── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Comprehensive Protection"
            subtitle="Explore our wide range of insurance products tailored for individuals, families, and businesses."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Life Assurance",
                image:
                  "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=700&auto=format&fit=crop&q=80",
                desc: "Secure your family's future with life policies, education plans, and investment solutions.",
                items: ["Education Target Plan", "Leadway Investment Plan", "Term Assurance"],
              },
              {
                title: "Health Insurance",
                image:
                  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=700&auto=format&fit=crop&q=80",
                desc: "Quality healthcare access for individuals, families, and corporate organisations.",
                items: ["Retail Health Plans", "Corporate Health Plans", "Family Health Plans"],
              },
              {
                title: "General Insurance",
                image:
                  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=700&auto=format&fit=crop&q=80",
                desc: "Protect your physical assets, vehicles, and business operations from unforeseen events.",
                items: ["Motor Insurance", "Home Insurance", "SME Business Cover"],
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white dark:bg-card rounded-3xl border border-border shadow-sm group overflow-hidden flex flex-col"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed flex-1">{cat.desc}</p>
                  <ul className="space-y-1.5 mb-6 text-sm font-medium">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                    asChild
                  >
                    <Link href="/products">View {cat.title.split(" ")[0]} Products</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products Carousel ── */}
      <section className="py-20 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Featured Solutions"
            subtitle="Our most popular plans chosen by Nigerians for comprehensive protection."
          />
          <div className="px-4">
            <ProductsCarousel products={products.slice(0, 10)} />
          </div>
          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8"
              asChild
            >
              <Link href="/products">
                Explore All 35+ Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Leadway ── */}
      <section className="py-20 md:py-24 bg-primary text-white overflow-hidden relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&auto=format&fit=crop&q=60)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Why Choose Leadway Assurance?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Backed by 54+ years of institutional strength, Leadway combines financial muscle with
                personalised advisory — giving you confidence at every stage of life.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { title: "Financial Strength", desc: "Backed by ₦67.8B in shareholders' funds." },
                  { title: "Fast Claims", desc: "48-hour processing for verified claims." },
                  { title: "Expert Advisors", desc: "Direct access via WhatsApp and phone." },
                  { title: "NAICOM Regulated", desc: "Fully compliant with national insurance laws." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="mt-10 bg-secondary text-secondary-foreground hover:bg-white hover:text-primary rounded-full px-8 font-bold"
                asChild
              >
                <Link href="/about">Learn More About Leadway</Link>
              </Button>
            </div>

            {/* Image collage */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-3 w-full max-w-md mx-auto">
              {[
                { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=80", alt: "Happy family protected", extra: "" },
                { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80", alt: "Financial advisor", extra: "mt-6" },
                { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=80", alt: "Business team", extra: "-mt-6" },
                { src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&auto=format&fit=crop&q=80", alt: "Family health", extra: "" },
              ].map((img, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden aspect-square shadow-xl ${img.extra}`}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            title="How It Works"
            subtitle="Getting covered is simple, transparent, and fast — four easy steps."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative mt-12">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-border -translate-y-1/2 z-0" />
            {[
              { step: 1, title: "Choose a Plan", desc: "Browse our products or chat with us for advice.", emoji: "🔍" },
              { step: 2, title: "Get a Quote", desc: "Receive a personalised premium calculation.", emoji: "📊" },
              { step: 3, title: "Apply", desc: "Complete simple documentation securely.", emoji: "📝" },
              { step: 4, title: "Get Covered", desc: "Receive your policy document instantly.", emoji: "🛡️" },
            ].map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white dark:bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center"
              >
                <div className="text-3xl mb-3">{s.emoji}</div>
                <div className="w-10 h-10 rounded-full bg-primary text-white text-base font-bold flex items-center justify-center mb-4 ring-4 ring-white dark:ring-card">
                  {s.step}
                </div>
                <h4 className="font-bold text-base mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Slider ── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Client Stories"
            subtitle="Hear from Nigerians who trust Leadway with their financial security."
          />
          <TestimonialsSlider testimonials={testimonials} />
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="text-primary font-bold hover:text-secondary hover:underline inline-flex items-center gap-1"
            >
              Read all client reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Partners / Awards strip ── */}
      <section className="py-10 border-y border-border bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
            Recognised &amp; Regulated By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-muted-foreground font-bold text-sm">
            {["NAICOM", "SEC Nigeria", "CBN Licensed", "ISO Certified", "NSE Listed"].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" /> {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-24 bg-primary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&auto=format&fit=crop&q=60)",
          }}
        />
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <Award className="w-14 h-14 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Don't leave tomorrow to chance. Get a personalised Leadway plan tailored to your lifestyle
            and budget — it takes less than 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 bg-secondary text-secondary-foreground hover:bg-white hover:text-primary transition-all text-lg font-bold rounded-full"
              asChild
            >
              <Link href="/get-quote">Request a Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 border-white text-white hover:bg-white hover:text-primary transition-all text-lg font-bold rounded-full gap-2"
              asChild
            >
              <a href="tel:07048495763">
                <Phone className="w-5 h-5" /> Call 070 4849 5763
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
