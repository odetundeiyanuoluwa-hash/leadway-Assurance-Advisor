import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { getProductImage } from "@/data/productImages";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const categoryColors: Record<string, string> = {
  Life: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  Health: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
  General: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const imgSrc = getProductImage(product.slug);
  const badgeClass = categoryColors[product.category] ?? "bg-secondary/10 text-secondary border-secondary/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Product image */}
      <div className="h-44 overflow-hidden relative">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className={`absolute bottom-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full border ${badgeClass}`}>
          {product.category} Insurance
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 leading-relaxed flex-1">
          {product.overview}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:text-secondary transition-colors mt-auto"
        >
          Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
