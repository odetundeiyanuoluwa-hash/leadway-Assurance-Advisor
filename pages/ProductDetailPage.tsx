import { useParams } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { getProductBySlug, products } from "@/data/products";
import { getProductImage } from "@/data/productImages";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/shared/LeadForm";
import { CheckCircle2, ChevronDown, Phone, Shield } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import NotFoundPage from "./NotFoundPage";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug || "");

  useSEO({
    title: product ? `${product.name} | Leadway Assurance` : "Product Not Found",
    description: product?.overview,
  });

  if (!product) return <NotFoundPage />;

  const heroImage = getProductImage(product.slug);

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const productTestimonials = testimonials.filter(t =>
    t.product.toLowerCase().includes(product.name.split(" ")[0].toLowerCase())
  ).slice(0, 2);
  const displayTestimonials = productTestimonials.length > 0 ? productTestimonials : testimonials.slice(0, 2);

  const waMessage = `Hello Leadway Assurance, I am interested in learning more about *${product.name}*. Please contact me with details and a quote.`;
  const whatsappHref = `https://wa.me/2347030770719?text=${encodeURIComponent(waMessage)}`;

  return (
    <Layout>
      {/* Sticky top CTA — desktop */}
      <div className="hidden md:block sticky top-[68px] z-40 bg-white/97 dark:bg-card/97 backdrop-blur border-b border-border py-3 shadow-sm">
        <div className="container mx-auto px-8 flex justify-between items-center gap-4">
          <span className="font-bold text-lg truncate">{product.name}</span>
          <div className="flex gap-3 flex-shrink-0">
            <Button variant="outline" className="border-primary text-primary gap-2" asChild>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" /> WhatsApp
              </a>
            </Button>
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Hero with background image */}
      <div className="relative bg-primary text-white overflow-hidden min-h-[360px] md:min-h-[420px] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-transparent" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-white/70 mb-6 overflow-x-auto whitespace-nowrap pb-1 gap-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronDown className="w-4 h-4 -rotate-90 flex-shrink-0" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronDown className="w-4 h-4 -rotate-90 flex-shrink-0" />
            <span className="font-medium text-white truncate max-w-[200px]">{product.name}</span>
          </nav>

          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/25 text-secondary border border-secondary/40 font-bold text-xs mb-4 uppercase tracking-wider">
              {product.category} Insurance
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-semibold mb-5">
              {product.tagline}
            </p>
            <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-xl">
              {product.overview}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary font-bold h-12 px-7 rounded-full"
                onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get a Quote Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-primary h-12 px-7 rounded-full gap-2 bg-transparent"
                asChild
              >
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-5 h-5 text-[#25D366]" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product image strip (contextual visual) */}
      <div className="w-full h-2 bg-secondary" />

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Key Benefits */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center gap-2">
                <Shield className="w-7 h-7 text-secondary" /> Key Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-card p-4 rounded-xl border border-border flex items-start gap-3 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-sm md:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Product contextual image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border aspect-video">
              <img
                src={heroImage}
                alt={`${product.name} — Leadway Assurance`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Features & Eligibility */}
            <div className="grid sm:grid-cols-2 gap-8">
              <section>
                <h2 className="text-xl font-bold text-primary mb-5 pb-2 border-b border-border">Plan Features</h2>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex flex-col">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{feature.label}</span>
                      <span className="font-semibold text-foreground">{feature.value}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-primary mb-5 pb-2 border-b border-border">Eligibility</h2>
                <ul className="space-y-3">
                  {product.eligibility.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Why Choose */}
            <section className="bg-muted/40 p-6 md:p-8 rounded-3xl border border-border">
              <h2 className="text-xl font-bold text-primary mb-4">Why Choose This Plan?</h2>
              <p className="text-base font-medium text-foreground mb-5 italic border-l-4 border-secondary pl-4 py-1">
                "{product.premiumHighlights}"
              </p>
              <div className="flex flex-wrap gap-2">
                {product.whyChoose.map((reason, idx) => (
                  <span key={idx} className="bg-white dark:bg-card px-4 py-2 rounded-full text-sm font-semibold border border-border shadow-sm">
                    ✓ {reason}
                  </span>
                ))}
              </div>
            </section>

            {/* Exclusions */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-5 pb-2 border-b border-border">Important Exclusions</h2>
              <p className="text-sm text-muted-foreground mb-4">This policy does not cover claims arising from:</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                {product.exclusions.map((exclusion, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-destructive mt-0.5 flex-shrink-0">✕</span>
                    <span>{exclusion}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {product.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left font-semibold text-sm md:text-base">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Testimonials */}
            {displayTestimonials.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-primary mb-6">What Clients Say</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {displayTestimonials.map((test, idx) => (
                    <TestimonialCard key={test.id} testimonial={test} index={idx} />
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-36 space-y-6">

              {/* Quote Form */}
              <div id="quote-form" className="scroll-mt-36">
                <LeadForm defaultProduct={product.slug} className="shadow-xl border-primary/20" />
              </div>

              {/* Contact Box */}
              <div className="bg-muted p-5 rounded-2xl border border-border text-center">
                <h3 className="font-bold text-base mb-1">Need Help Choosing?</h3>
                <p className="text-sm text-muted-foreground mb-4">Speak directly with our advisor for personalized guidance.</p>
                <div className="space-y-2">
                  <a href="tel:07048495763" className="flex items-center justify-center gap-2 font-bold text-primary hover:underline text-sm">
                    <Phone className="w-4 h-4" /> 070 4849 5763
                  </a>
                  <Button className="w-full bg-[#25D366] hover:bg-[#20b858] text-white gap-2" asChild>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp className="w-4 h-4" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-muted/30 py-12 md:py-16 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-xl font-bold text-primary mb-8 text-center">
              Other {product.category} Products You Might Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group">
                  <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={getProductImage(p.slug)}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{p.overview}</p>
                      <span className="text-secondary font-bold text-sm group-hover:underline">Learn more →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
