import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { faqs } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  useSEO({
    title: "Frequently Asked Questions",
    description: "Get answers to common questions about Leadway Assurance policies, payments, and claims."
  });

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "FAQ" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Find quick answers to common questions about our insurance products, claims process, and payment options.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        {faqs.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-border">{category.category}</h2>
            <Accordion type="single" collapsible className="w-full">
              {category.items.map((item, itemIdx) => (
                <AccordionItem key={itemIdx} value={`item-${idx}-${itemIdx}`} className="border-border">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}

        <div className="mt-16 bg-muted/30 p-8 rounded-2xl text-center border border-border">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">Can't find the answer you're looking for? Reach out directly.</p>
          <a href="https://wa.me/2347030770719" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </Layout>
  );
}
