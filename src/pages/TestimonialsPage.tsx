import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  useSEO({
    title: "Client Testimonials",
    description: "Read what clients have to say about Leadway Assurance — real stories from satisfied policyholders across Nigeria."
  });

  const averageRating = (testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length).toFixed(1);

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Testimonials" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">Client Stories</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Real stories from Nigerians who trust Leadway Assurance with their financial security.
            </p>
            <div className="bg-white dark:bg-card px-4 py-2 rounded-lg border border-border shadow-sm flex items-center gap-3 w-fit">
              <span className="text-3xl font-black text-primary">{averageRating}</span>
              <div className="flex flex-col">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-secondary" />)}
                </div>
                <span className="text-xs text-muted-foreground font-medium">Based on {testimonials.length} reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <TestimonialCard key={test.id} testimonial={test} index={idx} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
