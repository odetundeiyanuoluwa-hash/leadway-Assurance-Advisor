import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-24 md:pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="block mb-4">
              <img
                src="/leadway-logo.webp"
                alt="Leadway Assurance"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Nigeria's most trusted composite insurer since 1970. Providing innovative risk management and financial solutions for individuals, families, and businesses.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/leadway-assurance"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/leadwayassurance"
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/leadwayassure"
                target="_blank" rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/leadwayassurance"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@leadwayassurance"
                target="_blank" rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-5 text-white border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Leadway</Link></li>
              <li><Link href="/products" className="text-primary-foreground/80 hover:text-secondary transition-colors">All Insurance Products</Link></li>
              <li><Link href="/why-us" className="text-primary-foreground/80 hover:text-secondary transition-colors">Why Choose Leadway</Link></li>
              <li><Link href="/claims" className="text-primary-foreground/80 hover:text-secondary transition-colors">Make a Claim</Link></li>
              <li><Link href="/faq" className="text-primary-foreground/80 hover:text-secondary transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/testimonials" className="text-primary-foreground/80 hover:text-secondary transition-colors">Client Testimonials</Link></li>
              <li><Link href="/get-quote" className="text-primary-foreground/80 hover:text-secondary transition-colors">Get a Free Quote</Link></li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div>
            <h4 className="text-base font-bold mb-5 text-white border-b border-white/20 pb-2">Resources & Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact Support</Link></li>
              <li><Link href="/privacy-policy" className="text-primary-foreground/80 hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-primary-foreground/80 hover:text-secondary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/sitemap" className="text-primary-foreground/80 hover:text-secondary transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-5 text-white border-b border-white/20 pb-2">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 leading-relaxed">
                  Banker House, 12 Twon Brass Street,<br />
                  off Oro Ago Crescent, Garki Abuja
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:07048495763" className="text-primary-foreground/80 hover:text-white transition-colors">
                  070 4849 5763
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="https://wa.me/2347030770719" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:ia.leadway@gmail.com" className="text-primary-foreground/80 hover:text-white transition-colors break-all">
                  ia.leadway@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60 text-center md:text-left">
          <p>
            © {currentYear} Leadway Assurance. All rights reserved.
          </p>
          <p className="max-w-xl">
            Leadway Assurance Company Limited is authorized and regulated by the National Insurance Commission (NAICOM), Reg No. 025.
          </p>
        </div>
      </div>
    </footer>
  );
}
