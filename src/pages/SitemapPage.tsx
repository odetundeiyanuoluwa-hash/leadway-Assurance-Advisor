import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { products } from "@/data/products";

export default function SitemapPage() {
  const categories = ["Life", "General", "Health"];

  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-black text-primary mb-12 border-b border-border pb-4">Site Map</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Main Pages</h2>
            <ul className="space-y-4">
              <li><Link href="/" className="text-primary hover:underline text-lg font-medium">Home</Link></li>
              <li><Link href="/about" className="text-primary hover:underline text-lg font-medium">About Leadway Assurance</Link></li>
              <li><Link href="/why-us" className="text-primary hover:underline text-lg font-medium">Why Choose Leadway</Link></li>
              <li><Link href="/products" className="text-primary hover:underline text-lg font-medium">All Products</Link></li>
              <li><Link href="/get-quote" className="text-primary hover:underline text-lg font-medium">Get a Quote</Link></li>
              <li><Link href="/claims" className="text-primary hover:underline text-lg font-medium">Claims Process</Link></li>
              <li><Link href="/faq" className="text-primary hover:underline text-lg font-medium">FAQ</Link></li>
              <li><Link href="/testimonials" className="text-primary hover:underline text-lg font-medium">Testimonials</Link></li>
              <li><Link href="/contact" className="text-primary hover:underline text-lg font-medium">Contact</Link></li>
            </ul>
            
            <h2 className="text-2xl font-bold text-foreground mb-6 mt-12">Legal</h2>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-primary hover:underline text-lg font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-primary hover:underline text-lg font-medium">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Products by Category</h2>
            
            {categories.map(cat => (
              <div key={cat} className="mb-8">
                <h3 className="text-lg font-bold text-secondary mb-3">{cat} Insurance</h3>
                <ul className="space-y-3 pl-4 border-l-2 border-border">
                  {products.filter(p => p.category === cat).map(product => (
                    <li key={product.id}>
                      <Link href={`/products/${product.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}
