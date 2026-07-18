import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden flex flex-col"
    >
      <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/5 -rotate-12" />

      {/* Stars */}
      <div className="flex gap-0.5 mb-4 text-secondary">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "fill-secondary" : "fill-muted text-muted"}`} />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-foreground/80 italic mb-5 relative z-10 flex-1 text-sm leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="mt-auto border-t border-border pt-4 flex items-center gap-3">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-secondary/30 flex-shrink-0"
            loading="lazy"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold text-base">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <h4 className="font-bold text-primary text-sm truncate">{testimonial.name}</h4>
          <div className="text-xs text-muted-foreground flex gap-1 flex-wrap">
            <span>{testimonial.location}</span>
            <span>·</span>
            <span className="font-medium truncate">{testimonial.product}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
