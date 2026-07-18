import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { getProductsByCategory, ProductCategory } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const isScrolled = useScrollAnimation();

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [location]);

  const categories: ProductCategory[] = ["Life", "General", "Health"];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/97 dark:bg-card/97 backdrop-blur-md shadow-md py-2" : "bg-white dark:bg-card py-3"}`}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
          <img
            src="/leadway-logo.webp"
            alt="Leadway Assurance"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Text fallback (hidden when SVG loads, shown on dark mode as complement) */}
          <span className="sr-only">Leadway Assurance</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/" className={`text-sm font-semibold hover:text-secondary transition-colors ${location === "/" ? "text-secondary" : "text-foreground"}`}>
            Home
          </Link>
          <Link href="/about" className={`text-sm font-semibold hover:text-secondary transition-colors ${location === "/about" ? "text-secondary" : "text-foreground"}`}>
            About
          </Link>

          {/* Mega Menu */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-secondary transition-colors py-2">
              Products <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white dark:bg-card rounded-xl shadow-2xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 grid grid-cols-3 gap-6">
              {categories.map((cat) => (
                <div key={cat}>
                  <h3 className="font-bold text-primary border-b border-border pb-2 mb-3 text-sm uppercase tracking-wider">{cat} Insurance</h3>
                  <ul className="space-y-2">
                    {getProductsByCategory(cat).slice(0, 5).map(prod => (
                      <li key={prod.id}>
                        <Link href={`/products/${prod.slug}`} className="text-sm text-muted-foreground hover:text-secondary transition-colors line-clamp-1 block">
                          {prod.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/products" className="text-sm font-bold text-secondary hover:underline mt-2 inline-block">
                        View all {cat} →
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Link href="/claims" className={`text-sm font-semibold hover:text-secondary transition-colors ${location === "/claims" ? "text-secondary" : "text-foreground"}`}>
            Claims
          </Link>
          <Link href="/contact" className={`text-sm font-semibold hover:text-secondary transition-colors ${location === "/contact" ? "text-secondary" : "text-foreground"}`}>
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:07048495763" className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>070 4849 5763</span>
          </a>

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-md rounded-full px-5">
            <Link href="/get-quote">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-card border-b border-border shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-1">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Claims", href: "/claims" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-semibold p-3 rounded-lg transition-colors ${location === link.href ? "text-secondary bg-secondary/10" : "text-foreground hover:bg-muted"}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Products accordion */}
            <div className="border-t border-border/50 pt-2 mt-1">
              <button
                className="text-base font-semibold w-full text-left flex justify-between items-center p-3 rounded-lg hover:bg-muted text-foreground"
                onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
              >
                Products <ChevronDown className={`w-5 h-5 transition-transform ${activeMenu === "products" ? "rotate-180" : ""}`} />
              </button>

              {activeMenu === "products" && (
                <div className="pl-4 mt-2 flex flex-col gap-3 pb-2">
                  <Link href="/products" className="font-bold text-secondary text-sm">All Products Overview</Link>
                  {categories.map(cat => (
                    <div key={cat} className="flex flex-col gap-1.5">
                      <span className="font-bold text-primary text-xs uppercase tracking-wider mt-2">{cat}</span>
                      {getProductsByCategory(cat).slice(0, 4).map(prod => (
                        <Link key={prod.id} href={`/products/${prod.slug}`} className="text-sm text-muted-foreground hover:text-secondary pl-2">
                          {prod.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-border/50 pt-3 mt-2 flex flex-col gap-3">
              <a href="tel:07048495763" className="flex items-center gap-2 p-2 text-foreground font-medium">
                <Phone className="w-5 h-5 text-primary" />
                <span>070 4849 5763</span>
              </a>
              <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 text-base font-bold rounded-full">
                <Link href="/get-quote">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
