import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { Award, Clock, Shield, Building, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    badge: "Life Assurance",
    headline: "Protect What",
    highlight: "Matters Most",
    sub: "Secure your family's future with life policies, education plans, and investment solutions trusted by over 1 million Nigerians.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1600&auto=format&fit=crop&q=80",
    cta: { label: "Explore Life Plans", href: "/products" },
  },
  {
    badge: "Health Insurance",
    headline: "Your Health,",
    highlight: "Our Priority",
    sub: "Access premium hospitals and specialist care across Nigeria — quality healthcare coverage for individuals, families, and corporates.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1600&auto=format&fit=crop&q=80",
    cta: { label: "View Health Plans", href: "/products" },
  },
  {
    badge: "Motor Insurance",
    headline: "Drive With",
    highlight: "Confidence",
    sub: "Mandatory by Nigerian law — Leadway offers Third Party and Comprehensive motor cover with fast 48-hour claims processing.",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1600&auto=format&fit=crop&q=80",
    cta: { label: "Get Motor Cover", href: "/products/motor-insurance" },
  },
  {
    badge: "Business Insurance",
    headline: "Grow Your",
    highlight: "Business Safely",
    sub: "Comprehensive SME and corporate insurance packages that protect your assets, staff, and operations from unforeseen events.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80",
    cta: { label: "Explore Business Cover", href: "/products" },
  },
];

const trustBadges = [
  { icon: <Award className="w-4 h-4 text-secondary" />, label: "₦523.2B Total Assets" },
  { icon: <Clock className="w-4 h-4 text-secondary" />, label: "54+ Years Experience" },
  { icon: <Shield className="w-4 h-4 text-secondary" />, label: "NAICOM Regulated" },
  { icon: <Building className="w-4 h-4 text-secondary" />, label: "Nationwide Reach" },
];

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5500, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden">
      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/92 via-primary/82 to-primary/60" />

              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 pb-36 md:pt-40 md:pb-48 text-white text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="max-w-4xl mx-auto"
                >
                  <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/25 text-secondary border border-secondary/40 font-bold text-sm mb-6 uppercase tracking-wider">
                    {slide.badge}
                  </span>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
                    {slide.headline}{" "}
                    <span className="text-secondary">{slide.highlight}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {slide.sub}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto h-14 px-8 bg-secondary text-secondary-foreground hover:bg-white hover:text-primary transition-all text-lg font-bold shadow-xl rounded-full"
                      asChild
                    >
                      <Link href={slide.cta.href}>{slide.cta.label}</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto h-14 px-8 border-white/30 text-white hover:bg-white hover:text-primary transition-all text-lg font-bold rounded-full bg-transparent gap-2"
                      asChild
                    >
                      <a href="https://wa.me/2347030770719" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="w-5 h-5 text-[#25D366]" /> Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "w-8 bg-secondary"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Trust badge bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md border-t border-white/10 py-3 hidden md:block z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-white/80 text-sm font-semibold uppercase tracking-wider">
            {trustBadges.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.icon} {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
