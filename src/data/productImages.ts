/**
 * Maps product slugs to relevant, high-quality Unsplash image URLs.
 * Images are themed to match each insurance product category.
 */
export const productImages: Record<string, string> = {
  // Life Assurance
  "leadway-investment-plan":
    "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=900&auto=format&fit=crop&q=80",
  "education-target-plan":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&auto=format&fit=crop&q=80",
  "leadway-target-plan":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=80",
  "deferred-annuity":
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&auto=format&fit=crop&q=80",
  "term-assurance":
    "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=900&auto=format&fit=crop&q=80",
  "whole-life-assurance":
    "https://images.unsplash.com/photo-1606206873764-fd15e242b668?w=900&auto=format&fit=crop&q=80",
  "group-life-assurance":
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=80",
  "mortgage-protection":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80",
  "personal-accident":
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&auto=format&fit=crop&q=80",
  "credit-life":
    "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=900&auto=format&fit=crop&q=80",
  "critical-illness":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80",

  // General Insurance
  "motor-insurance":
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=900&auto=format&fit=crop&q=80",
  "home-insurance":
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&auto=format&fit=crop&q=80",
  "fire-insurance":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop&q=80",
  "burglary-insurance":
    "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=900&auto=format&fit=crop&q=80",
  "marine-insurance":
    "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=900&auto=format&fit=crop&q=80",
  "engineering-insurance":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&auto=format&fit=crop&q=80",
  "goods-in-transit":
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&auto=format&fit=crop&q=80",
  "public-liability":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&auto=format&fit=crop&q=80",
  "professional-indemnity":
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&auto=format&fit=crop&q=80",
  "employers-liability":
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&auto=format&fit=crop&q=80",
  "sme-business-insurance":
    "https://images.unsplash.com/photo-1664575599736-c5197c684128?w=900&auto=format&fit=crop&q=80",
  "aviation-insurance":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&auto=format&fit=crop&q=80",

  // Health Insurance
  "retail-health-plans":
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&auto=format&fit=crop&q=80",
  "corporate-health-plans":
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&auto=format&fit=crop&q=80",
  "family-health-plans":
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&auto=format&fit=crop&q=80",
};

/** Category hero images */
export const categoryImages: Record<string, string> = {
  Life: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1200&auto=format&fit=crop&q=80",
  General: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&auto=format&fit=crop&q=80",
  Health: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&auto=format&fit=crop&q=80",
};

/** Fallback for any unmatched slug */
export const fallbackImage =
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80";

export function getProductImage(slug: string): string {
  return productImages[slug] ?? fallbackImage;
}
