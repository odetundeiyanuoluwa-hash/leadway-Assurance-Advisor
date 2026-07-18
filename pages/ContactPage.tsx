import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

const ADVISOR_WHATSAPP = "2347030770719";
const ADVISOR_EMAIL = "ia.leadway@gmail.com";

export default function ContactPage() {
  useSEO({
    title: "Contact Leadway Assurance",
    description: "Get in touch with Leadway Assurance. Call, WhatsApp or email us for insurance quotes and enquiries."
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    const waLines = [
      `Hello Leadway Assurance, I sent a message via the website.`,
      ``,
      `📋 *My Details:*`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      ``,
      `💬 *Message:*`,
      formData.message,
      ``,
      `Please get back to me at your earliest convenience. Thank you.`,
    ];
    const whatsappUrl = `https://wa.me/${ADVISOR_WHATSAPP}?text=${encodeURIComponent(waLines.join("\n"))}`;

    // Open WhatsApp SYNCHRONOUSLY (before any await) to avoid popup blockers
    const waWindow = window.open(whatsappUrl, "_blank");
    if (!waWindow) {
      toast.info("Popup blocked", { description: "Allow popups or use the WhatsApp link below." });
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${ADVISOR_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Website Enquiry from ${formData.name}`,
          _template: "table",
          _captcha: "false",
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Message: formData.message,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success === "true" || result.success === true) {
          toast.success("Message sent!", { description: "Email confirmed. We'll reply within 24 hours." });
        } else {
          toast.error("Email delivery failed", { description: "Your WhatsApp message was still sent." });
        }
      } else {
        toast.error("Email delivery failed", { description: "Your WhatsApp message was still sent." });
      }
    } catch {
      toast.error("Email could not be sent", { description: "Your WhatsApp message was opened successfully." });
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  }

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary/5 py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Have questions about a policy or need to file a claim? Reach out through any channel below — we respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-primary">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-muted-foreground text-sm mb-1">Call for immediate assistance.</p>
                  <a href="tel:07048495763" className="text-primary font-semibold hover:underline">070 4849 5763</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">WhatsApp</h4>
                  <p className="text-muted-foreground text-sm mb-1">Fastest way to get quotes &amp; information.</p>
                  <a href="https://wa.me/2347030770719" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                    070 3077 0719
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-muted-foreground text-sm mb-1">For detailed inquiries and documents.</p>
                  <a href="mailto:ia.leadway@gmail.com" className="text-primary font-semibold hover:underline break-all">ia.leadway@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Corporate Office</h4>
                  <p className="text-muted-foreground text-sm mb-1">Leadway Assurance Company Limited</p>
                  <p className="text-foreground font-medium">Banker House, 12 Twon Brass Street,<br />off Oro Ago Crescent, Garki Abuja</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Business Hours</h4>
                  <p className="text-foreground font-medium">Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p className="text-foreground font-medium">Saturday: 9:00 AM – 1:00 PM</p>
                  <p className="text-muted-foreground text-sm mt-1">Available 24/7 via WhatsApp for emergencies.</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="mt-8 p-5 bg-[#25D366]/10 rounded-2xl border border-[#25D366]/20 flex items-center gap-4">
              <FaWhatsapp className="w-10 h-10 text-[#25D366] flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground">Prefer instant response?</p>
                <p className="text-sm text-muted-foreground mb-2">Chat with us on WhatsApp right now.</p>
                <a
                  href="https://wa.me/2347030770719?text=Hello%20Leadway%2C%20I%20have%20an%20enquiry."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#20b858] transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" /> Start Chat Now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg h-fit">
            <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in this form and your message will be sent by email &amp; WhatsApp simultaneously.
            </p>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-1">Full Name <span className="text-destructive">*</span></label>
                <Input
                  placeholder="Your full name"
                  required
                  value={formData.name}
                  onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Email <span className="text-destructive">*</span></label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Phone <span className="text-destructive">*</span></label>
                  <Input
                    type="tel"
                    placeholder="08012345678"
                    required
                    value={formData.phone}
                    onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Message <span className="text-destructive">*</span></label>
                <Textarea
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="resize-none"
                  value={formData.message}
                  onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-bold gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <><Loader2 className="h-5 w-5 animate-spin" />Sending…</>
                ) : (
                  <><FaWhatsapp className="w-5 h-5" />Send via Email &amp; WhatsApp</>
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Or call us directly: <a href="tel:07048495763" className="text-primary hover:underline font-semibold">07048495763</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
}
