import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import { motion } from "framer-motion";

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
  /** If true, shows 1 card per view; default shows 1/2/3 depending on breakpoint */
  single?: boolean;
}

export function TestimonialsSlider({ testimonials, single = false }: TestimonialsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4500, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onReInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    onInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4 md:gap-6 touch-pan-y">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`flex-[0_0_100%] min-w-0 ${
                single ? "" : "sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
              }`}
            >
              <div className="bg-card h-full p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden flex flex-col">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/5 -rotate-12" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < t.rating ? "fill-secondary" : "fill-muted text-muted"}`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/80 italic text-sm leading-relaxed flex-1 mb-5">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4 flex items-center gap-3 mt-auto">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-secondary/30 flex-shrink-0"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold text-base">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-primary truncate">{t.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {t.location} · {t.product}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-border bg-card hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center shadow-sm"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex gap-1.5">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-border bg-card hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center shadow-sm"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
