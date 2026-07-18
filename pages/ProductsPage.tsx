import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { products, ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/shared/ProductCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductsPage() {
  useSEO({
    title: "Insurance Products",
    description: "Explore Leadway Assurance products including Life, General, and Health insurance plans."
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.overview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories: ProductCategory[] = ["Life", "General", "Health"];

  return (
    <Layout>
      <div className="bg-primary/5 py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Products" }]} />
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">Insurance Products for Every Stage of Life</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Browse our comprehensive suite of risk management and wealth creation solutions designed for the Nigerian market.
          </p>
          
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              type="text" 
              placeholder="Search products by name or keyword..." 
              className="pl-10 h-12 bg-white dark:bg-card text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {searchTerm ? (
          <div>
            <h2 className="text-2xl font-bold mb-8">Search Results ({filteredProducts.length})</h2>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-muted/30 rounded-2xl border border-border">
                <p className="text-lg text-muted-foreground">No products found matching "{searchTerm}".</p>
                <button onClick={() => setSearchTerm("")} className="text-primary font-medium mt-4 hover:underline">Clear search</button>
              </div>
            )}
          </div>
        ) : (
          <Tabs defaultValue="Life" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="h-14 p-1 bg-muted/50 rounded-full">
                {categories.map(cat => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    className="px-8 py-3 rounded-full text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                  >
                    {cat} Insurance
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map(cat => (
              <TabsContent key={cat} value={cat} className="mt-0 outline-none">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-primary">{cat} Insurance Products</h2>
                  <p className="text-muted-foreground mt-2">
                    {cat === "Life" && "Secure your future and create wealth with our life assurance policies."}
                    {cat === "General" && "Protect your physical assets, business, and liabilities."}
                    {cat === "Health" && "Access premium healthcare without the financial burden."}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.filter(p => p.category === cat).map((product, idx) => (
                    <ProductCard key={product.id} product={product} index={idx} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </Layout>
  );
}
