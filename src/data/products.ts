export type ProductCategory = "Life" | "General" | "Health";

export interface ProductFeature {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  name: string;
  tagline: string;
  overview: string;
  benefits: string[];
  features: ProductFeature[];
  eligibility: string[];
  exclusions: string[];
  faqs: { question: string; answer: string }[];
  premiumHighlights: string;
  whyChoose: string[];
}

export const products: Product[] = [
  // LIFE ASSURANCE
  {
    id: "lip",
    slug: "leadway-investment-plan",
    category: "Life",
    name: "Leadway Investment Plan (LIP)",
    tagline: "Grow Your Wealth, Protect Your Future",
    overview: "Single premium investment plan that pays accumulated fund value at maturity. Free life cover of 20% of invested premium (max ₦5,000,000). Ideal for meeting future financial targets like child's education, car purchase, home purchase, holidays, or any personal financial goals.",
    benefits: [
      "Guaranteed maturity benefit",
      "20% free life cover",
      "Optional critical illness cover",
      "Optional accidental disability cover",
      "Policy loan facility (up to 70% of surrender value)",
      "30-day cooling-off period",
      "Tax benefits"
    ],
    features: [
      { label: "Minimum Premium", value: "₦500,000 (Single)" },
      { label: "Policy Term", value: "1–20 years" },
      { label: "Entry Age", value: "18–64 years" },
      { label: "Maturity Age", value: "Maximum 65 years" }
    ],
    eligibility: [
      "Minimum entry age is 18 years",
      "Maximum entry age is 64 years",
      "Must be a Nigerian resident"
    ],
    exclusions: [
      "Pre-existing medical conditions for critical illness cover",
      "Self-inflicted injuries",
      "Hazardous occupations unless disclosed and accepted"
    ],
    faqs: [
      { question: "What is the maximum entry age?", answer: "64 years for life/PTD, and 59 years for Critical Illness cover." },
      { question: "How is it different from bank savings?", answer: "It provides unlimited protection elements such as life cover, critical illness, and permanent total disability benefits alongside your investment." },
      { question: "Can I assign it to a lender?", answer: "Yes, the policy can be assigned to a lender as collateral." }
    ],
    premiumHighlights: "Invest a single lump sum and watch it grow with annual interest while receiving free life protection.",
    whyChoose: ["Flexible terms", "High returns", "Built-in protection"]
  },
  {
    id: "etp",
    slug: "education-target-plan",
    category: "Life",
    name: "Education Target Plan Plus",
    tagline: "Secure Your Child's Future, No Matter What",
    overview: "Designed to meet the dual objective of every parent — saving towards a child's future education and securing this future despite life's tragedies. Defined benefit policy (not savings).",
    benefits: [
      "Death benefit (full sum assured paid as lump sum)",
      "Accidental Total & Permanent Disability cover (optional)",
      "Critical Illness cover (optional)",
      "Cash benefits at milestones",
      "Free Second Medical Opinion service",
      "Tax relief eligibility"
    ],
    features: [
      { label: "Min Annual Premium", value: "₦120,000" },
      { label: "Policy Terms", value: "6, 9, 12, 15, 18 years" },
      { label: "Payment Frequency", value: "Single, Monthly, Quarterly, Semi-Annually, Annually" }
    ],
    eligibility: [
      "Minimum entry age 18 years",
      "Maximum age such that policy ceases at 65 (life/PTD) or 60 (with CI)"
    ],
    exclusions: ["Suicide", "Participation in criminal acts"],
    faqs: [
      { question: "When are cash benefits paid?", answer: "1/4 of sum assured when 1/3 of term completed; 1/4 when 2/3 completed; remaining 1/2 at expiry." }
    ],
    premiumHighlights: "Ensure your child's education is never compromised.",
    whyChoose: ["Guaranteed education funding", "Milestone payouts", "Comprehensive protection"]
  },
  {
    id: "ltp",
    slug: "leadway-target-plan",
    category: "Life",
    name: "Leadway Target Plan",
    tagline: "Achieve Your Target, No Matter What",
    overview: "A plan that provides guaranteed cash payment to enable an individual meet future financial targets and obligations, regardless of whether or not the individual survives to the target date. Targets include: starting a business, buying a car/house, holiday, retirement augmentation, or any personal needs.",
    benefits: [
      "Guaranteed sum assured at maturity",
      "Death benefit (sum assured paid as lump sum)",
      "Optional accidental total & permanent disability cover",
      "Optional critical illness cover",
      "Tax relief eligibility"
    ],
    features: [
      { label: "Min Annual Contribution", value: "₦90,000" },
      { label: "Min Term", value: "3 years" },
      { label: "Premium Type", value: "Regular or Single" }
    ],
    eligibility: [
      "Entry age 18 to max 65 at policy cessation"
    ],
    exclusions: ["Suicide", "Undeclared hazardous activities"],
    faqs: [
      { question: "What happens if I delay premium payment?", answer: "There is a late payment charge of 10% p.a. on delayed premiums." }
    ],
    premiumHighlights: "Disciplined savings with a guaranteed target outcome.",
    whyChoose: ["Guaranteed target amount", "Flexibility of terms", "Life protection included"]
  },
  {
    id: "dap",
    slug: "deferred-annuity",
    category: "Life",
    name: "Deferred Annuity Plan",
    tagline: "Build a Secure Income for Retirement",
    overview: "A platform for saving towards retirement. Provides regular income after retirement. Suited for self-employed persons or those wanting to augment RSA (Retirement Savings Account) income. Operates as regular savings with daily interest during the deferred period.",
    benefits: [
      "Maturity benefit (accumulated amount transferred to PFA or converted to immediate annuity)",
      "Death benefit (life cover + accumulated amount as lump sum)",
      "Mandatory basic life cover of ₦500,000",
      "Optional ATPD cover",
      "Optional Critical Illness cover",
      "Optional Health cover",
      "Tax exemption (contributions for 60+ months)",
      "Loan facility (partial surrender available)"
    ],
    features: [
      { label: "Min Premium", value: "₦10,000/month" },
      { label: "Min Term", value: "5 years" },
      { label: "Max Age", value: "65 at maturity" }
    ],
    eligibility: [
      "Self-employed or salary earners",
      "Maximum age 65 at maturity"
    ],
    exclusions: ["Standard life exclusions apply"],
    faqs: [
      { question: "How is interest calculated?", answer: "Interest accrues daily and is credited annually at the Leadway Base Rate." }
    ],
    premiumHighlights: "Secure your golden years with a plan that pays you back.",
    whyChoose: ["Daily interest accrual", "Flexible contributions", "Tax efficiency"]
  },
  {
    id: "term",
    slug: "term-assurance",
    category: "Life",
    name: "Term Assurance",
    tagline: "Maximum Protection at Minimum Cost",
    overview: "Pure life protection plan providing a death benefit for a specified period. Ideal for income replacement, debt protection, and family security. The most affordable form of life insurance.",
    benefits: [
      "Death benefit paid to beneficiaries",
      "Affordable premiums",
      "Specified term coverage",
      "Optional accidental death benefit",
      "Peace of mind for loved ones"
    ],
    features: [
      { label: "Entry Age", value: "18-50 years" },
      { label: "Policy Terms", value: "1 years" },
      { label: "Min Sum Assured", value: "₦10,000" }
    ],
    eligibility: [
      "Adults aged 18-50"
    ],
    exclusions: ["Suicide"],
    faqs: [
      { question: "Do I get my money back if I survive?", answer: "No, this is a pure protection plan without a savings component." }
    ],
    premiumHighlights: "High coverage for a low premium during the years you need it most.",
    whyChoose: ["Highly affordable", "Fixed premiums", "Significant coverage"]
  },
  {
    id: "whole",
    slug: "whole-life-assurance",
    category: "Life",
    name: "Whole Life Assurance",
    tagline: "Lifetime Protection for Your Family",
    overview: "Provides permanent life insurance coverage for the lifetime of the insured. Builds cash value over time. Combines protection with savings component.",
    benefits: [
      "Lifetime coverage",
      "Cash value accumulation",
      "Death benefit",
      "Policy loan facility",
      "Dividend participation (where applicable)"
    ],
    features: [
      { label: "Entry Age", value: "18–65 years" },
      { label: "Coverage Duration", value: "Lifelong" },
      { label: "Loan Option", value: "Up to 80% of cash value" }
    ],
    eligibility: ["Anyone aged 18-65"],
    exclusions: ["Suicide"],
    faqs: [
      { question: "Can I borrow against this policy?", answer: "Yes, you can take a loan up to 80% of the accumulated cash value." }
    ],
    premiumHighlights: "Coverage that lasts your entire lifetime while building cash value.",
    whyChoose: ["Permanent protection", "Cash value growth", "Loan access"]
  },
  {
    id: "gla",
    slug: "group-life-assurance",
    category: "Life",
    name: "Group Life Assurance",
    tagline: "Protecting Your Workforce, Empowering Your Business",
    overview: "Provides life cover to employees under a single master policy arranged by employer. Mandatory under the Pension Reform Act for employers. Covers death from any cause during employment.",
    benefits: [
      "Minimum 3× annual salary death benefit",
      "Accident/disability cover",
      "Medical examination generally not required for standard cover",
      "Single policy covers all employees",
      "Premium tax-deductible",
      "Enhanced employee loyalty"
    ],
    features: [
      { label: "Min Group Size", value: "5 employees" },
      { label: "Cover Amount", value: "Based on salary multiples" },
      { label: "Term", value: "Annual renewable" }
    ],
    eligibility: ["Employers with 5 or more employees"],
    exclusions: ["Standard exclusions as per policy wording"],
    faqs: [
      { question: "Is this mandatory?", answer: "Yes, under the Pension Reform Act, employers with 3 or more employees must provide this cover." }
    ],
    premiumHighlights: "Fulfill statutory requirements while showing your employees you care.",
    whyChoose: ["Regulatory compliance", "Tax benefits", "Employee retention"]
  },
  {
    id: "mortgage",
    slug: "mortgage-protection",
    category: "Life",
    name: "Mortgage Protection Plan",
    tagline: "Protect Your Home, Whatever Happens",
    overview: "Ensures your mortgage is paid off if you die or become seriously ill during the repayment period. Protects your family from losing their home.",
    benefits: [
      "Outstanding mortgage balance paid on death",
      "Optional critical illness cover",
      "Decreasing cover matches loan balance",
      "Peace of mind for homeowners",
      "Protects family from homelessness"
    ],
    features: [
      { label: "Cover Amount", value: "Linked to outstanding mortgage" },
      { label: "Term", value: "Matches mortgage term" },
      { label: "Entry Age", value: "18–60 years" }
    ],
    eligibility: ["Homeowners with an active mortgage"],
    exclusions: ["Suicide"],
    faqs: [
      { question: "Does the cover amount change?", answer: "Yes, it decreases in line with your outstanding mortgage balance." }
    ],
    premiumHighlights: "Keep the home in your family, not the debt.",
    whyChoose: ["Bank acceptable", "Decreasing premiums", "Targeted protection"]
  },
  {
    id: "pac",
    slug: "personal-accident",
    category: "Life",
    name: "Personal Accident Cover",
    tagline: "24/7 Protection Against Life's Unexpected Events",
    overview: "Provides financial compensation for accidental death, permanent disability, or temporary disability arising from accidents anywhere in the world.",
    benefits: [
      "Accidental death benefit",
      "Permanent total disability (100% sum assured)",
      "Permanent partial disability (proportional)",
      "Temporary total disability (weekly benefit)",
      "Medical expenses reimbursement",
      "24/7 worldwide coverage"
    ],
    features: [
      { label: "Entry Age", value: "18–65 years" },
      { label: "Term", value: "Annual renewable" },
      { label: "Coverage", value: "Worldwide" }
    ],
    eligibility: ["Anyone aged 18-65"],
    exclusions: ["Self-inflicted injuries", "Professional sports", "Intoxication"],
    faqs: [
      { question: "Is medical examination required?", answer: "No medical examination is required for this cover." }
    ],
    premiumHighlights: "Round-the-clock protection against accidents.",
    whyChoose: ["No medical exam", "Global coverage", "Comprehensive accident benefits"]
  },
 
  // GENERAL INSURANCE
  {
    id: "motor",
    slug: "motor-insurance",
    category: "General",
    name: "Motor Insurance",
    tagline: "Drive with Confidence, Every Mile",
    overview: "Mandatory by Nigerian law. Leadway offers Third Party (basic legal requirement) and Comprehensive (full protection) motor insurance.",
    benefits: [
      "Legal compliance",
      "Accident coverage",
      "Third-party liability",
      "Towing services",
      "Roadside assistance",
      "Replacement vehicle (comprehensive)"
    ],
    features: [
      { label: "Types", value: "Third Party, Third Party Fire & Theft, Comprehensive" },
      { label: "Coverage", value: "Nigeria" }
    ],
    eligibility: ["Vehicle owners in Nigeria"],
    exclusions: ["Driving under influence", "Unlicensed drivers", "Wear and tear"],
    faqs: [
      { question: "What does Third Party cover?", answer: "It covers your legal liability for death, bodily injury, and property damage to third parties." }
    ],
    premiumHighlights: "Complete protection for you, your car, and others on the road.",
    whyChoose: ["Fast claims", "Nationwide towing", "Legal compliance"]
  },
  {
    id: "home",
    slug: "home-insurance",
    category: "General",
    name: "Home Insurance",
    tagline: "Your Home Is Safe With Leadway",
    overview: "Comprehensive protection for your home and its contents against fire, theft, flood, and other perils.",
    benefits: [
      "Building structure cover",
      "Contents cover",
      "Personal liability",
      "Theft/burglary",
      "Fire and allied perils",
      "Temporary accommodation"
    ],
    features: [
      { label: "Coverage Scope", value: "Building and Contents" },
      { label: "Policy Term", value: "Annual" }
    ],
    eligibility: ["Homeowners and tenants"],
    exclusions: ["Wear and tear", "Deliberate acts"],
    faqs: [
      { question: "Can tenants buy this?", answer: "Yes, tenants can insure their contents only." }
    ],
    premiumHighlights: "Protect your biggest asset from unpredictable events.",
    whyChoose: ["Comprehensive cover", "Flexible options", "Fast settlement"]
  },
  {
    id: "fire",
    slug: "fire-insurance",
    category: "General",
    name: "Fire & Allied Perils Insurance",
    tagline: "Protect Your Property from the Unexpected",
    overview: "Covers damage or loss to property caused by fire, lightning, explosion, and allied perils.",
    benefits: [
      "Coverage against fire damage",
      "Coverage for lightning and explosion",
      "Protection for buildings and contents",
      "Business continuity support"
    ],
    features: [
      { label: "Cover Options", value: "Building, Stock, Machinery" }
    ],
    eligibility: ["Property owners, businesses"],
    exclusions: ["War risks", "Nuclear risks"],
    faqs: [
      { question: "What are allied perils?", answer: "Things like flood, storm, tempest, riot, strike, and malicious damage." }
    ],
    premiumHighlights: "Essential protection for commercial and residential properties.",
    whyChoose: ["Broad coverage", "Customizable limits", "Expert risk assessment"]
  },
  {
    id: "burglary",
    slug: "burglary-insurance",
    category: "General",
    name: "Burglary & Theft Insurance",
    tagline: "Keep Your Valuables Safe",
    overview: "Covers loss of property due to burglary, housebreaking, or theft with evidence of forcible entry.",
    benefits: [
      "Compensation for stolen goods",
      "Coverage for damage caused during break-in",
      "Peace of mind for business owners"
    ],
    features: [
      { label: "Requirement", value: "Evidence of forcible entry/exit" }
    ],
    eligibility: ["Businesses, Warehouses, Homeowners"],
    exclusions: ["Theft by employees", "Shoplifting", "Unexplained shortages"],
    faqs: [
      { question: "Does it cover shoplifting?", answer: "No, there must be evidence of forcible entry or exit." }
    ],
    premiumHighlights: "Protect your inventory and assets from unauthorized access.",
    whyChoose: ["Clear terms", "Fast processing", "Complementary to Fire policy"]
  },
  {
    id: "marine",
    slug: "marine-insurance",
    category: "General",
    name: "Marine Cargo & Hull Insurance",
    tagline: "Safe Transit for Your Goods",
    overview: "Covers goods in transit by sea, air, or road. Hull cover for vessel owners.",
    benefits: [
      "Protection against loss or damage to cargo",
      "Coverage during loading and unloading",
      "General average contributions",
      "Hull protection for vessels"
    ],
    features: [
      { label: "Coverage Types", value: "Institute Cargo Clauses A, B, C" }
    ],
    eligibility: ["Importers, Exporters, Vessel Owners"],
    exclusions: ["Inherent vice", "Delay", "Improper packing"],
    faqs: [
      { question: "Is marine insurance mandatory for imports?", answer: "Yes, Nigerian law requires imports to be insured locally." }
    ],
    premiumHighlights: "Navigate global trade with confidence.",
    whyChoose: ["Local compliance", "Global standards", "Expert claims handling"]
  },
  {
    id: "engineering",
    slug: "engineering-insurance",
    category: "General",
    name: "Engineering Insurance",
    tagline: "Protect Your Projects and Equipment",
    overview: "Covers contractors all risk, erection all risk, machinery breakdown, electronic equipment, boiler and pressure vessels.",
    benefits: [
      "Comprehensive project coverage",
      "Protection against physical damage",
      "Third-party liability during construction",
      "Equipment breakdown coverage"
    ],
    features: [
      { label: "Policies", value: "CAR, EAR, Machinery Breakdown, etc." }
    ],
    eligibility: ["Contractors, Manufacturers, Tech Firms"],
    exclusions: ["Wear and tear", "Faulty design (unless specially covered)"],
    faqs: [
      { question: "What is Contractors All Risk?", answer: "It covers civil engineering projects against physical damage and third-party claims." }
    ],
    premiumHighlights: "Specialized coverage for complex technical risks.",
    whyChoose: ["Technical expertise", "Tailored policies", "Risk management support"]
  },
  {
    id: "git",
    slug: "goods-in-transit",
    category: "General",
    name: "Goods in Transit",
    tagline: "Your Cargo, Our Responsibility",
    overview: "Covers goods against loss or damage while being transported by road within Nigeria.",
    benefits: [
      "Coverage for loss or damage during transit",
      "Protection against fire, collision, overturning",
      "Theft protection (if accompanied by violence/forcible entry)"
    ],
    features: [
      { label: "Mode", value: "Road transport" },
      { label: "Limit", value: "Per carry or Annual carry" }
    ],
    eligibility: ["Manufacturers, Distributors, Transporters"],
    exclusions: ["Employee infidelity", "Inherent vice"],
    faqs: [
      { question: "Are my own vehicles covered?", answer: "This covers the goods; the vehicles require separate Motor Insurance." }
    ],
    premiumHighlights: "Keep your supply chain financially secure.",
    whyChoose: ["Flexible limits", "Prompt settlement", "Nationwide coverage"]
  },
  {
    id: "employers",
    slug: "employers-liability",
    category: "General",
    name: "Employer's Liability Insurance",
    tagline: "Protect Your Business, Care for Your Employees",
    overview: "Covers employers against claims from employees who suffer injury or illness as a result of their work.",
    benefits: [
      "Legal cost coverage",
      "Compensation for employees",
      "Compliance with labor laws"
    ],
    features: [
      { label: "Limit", value: "Agreed limit of liability" }
    ],
    eligibility: ["Employers"],
    exclusions: ["Deliberate acts", "Non-work-related injuries"],
    faqs: [
      { question: "Is this different from Group Life?", answer: "Yes. Group Life pays for death regardless of cause. Employer's Liability covers legal liability for work-related injury/illness." }
    ],
    premiumHighlights: "Fulfill your duty of care to your workforce.",
    whyChoose: ["Legal protection", "Employee welfare", "Customized limits"]
  },
  {
    id: "sme",
    slug: "sme-business-insurance",
    category: "General",
    name: "SME / Business Insurance (Lifestyle+)",
    tagline: "Complete Business Protection for SMEs",
    overview: "Leadway's comprehensive insurance package for small and medium enterprises. Covers property, liability, business interruption, and more.",
    benefits: [
      "Multi-risk protection in one policy",
      "Fire and allied perils",
      "Burglary and theft",
      "Public liability",
      "Business interruption support"
    ],
    features: [
      { label: "Target", value: "Small & Medium Enterprises" },
      { label: "Structure", value: "Packaged policy" }
    ],
    eligibility: ["SMEs across various sectors"],
    exclusions: ["Standard general exclusions apply"],
    faqs: [
      { question: "Why buy a package instead of separate policies?", answer: "It is more cost-effective and easier to manage single renewal date." }
    ],
    premiumHighlights: "All-in-one protection designed specifically for growing businesses.",
    whyChoose: ["Cost-effective", "Comprehensive", "Simplified administration"]
  },
  {
    id: "aviation",
    slug: "aviation-insurance",
    category: "General",
    name: "Aviation Insurance",
    tagline: "Coverage for the Skies",
    overview: "Specialized coverage for aircraft owners, operators, and passengers. Hull and liability cover.",
    benefits: [
      "Aircraft hull all risks",
      "Passenger liability",
      "Third-party liability",
      "Aviation cargo"
    ],
    features: [
      { label: "Scope", value: "Domestic and international" }
    ],
    eligibility: ["Airlines, Private jet owners, Aviation service providers"],
    exclusions: ["War (unless specially endorsed)", "Illegal use"],
    faqs: [
      { question: "Do you cover private jets?", answer: "Yes, we cover both commercial fleets and private aircraft." }
    ],
    premiumHighlights: "Top-tier protection for high-value aviation assets.",
    whyChoose: ["High capacity", "Expert underwriting", "Reinsurance backing"]
  },

  // HEALTH INSURANCE
  {
    id: "retail-health",
    slug: "retail-health-plans",
    category: "Health",
    name: "Retail Health Plans",
    tagline: "Quality Healthcare for You and Your Family",
    overview: "Leadway Health offers five comprehensive retail health plans with access to quality hospitals nationwide. Plans range from basic to premium coverage.",
    benefits: [
      "Telemedicine",
      "Out-patient care",
      "Dental (primary)",
      "Optical care",
      "Antenatal/maternity",
      "Immunization",
      "HIV/AIDS diagnosis & treatment",
      "Accidents & Emergencies",
      "Health screening"
    ],
    features: [
      { label: "Strawberry", value: "₦69,998.50 (OP: ₦150k, IP: ₦350k)" },
      { label: "Cranberry", value: "₦98,527 (OP: ₦250k, IP: ₦500k)" },
      { label: "Blueberry", value: "₦169,884 (OP: ₦300k, IP: ₦750k)" },
      { label: "Blackberry", value: "₦390,650 (OP: ₦500k, IP: ₦2m)" },
      { label: "Raspberry", value: "₦636,480 (OP: ₦500k, IP: ₦2m, Top hospitals)" }
    ],
    eligibility: ["Individuals and families in Nigeria"],
    exclusions: [
      "Cosmetic surgery",
      "Teeth whitening",
      "Dental prosthesis",
      "Congenital abnormalities",
      "Organ transplants",
      "Advanced cancer management"
    ],
    faqs: [
      { question: "Are pre-existing conditions covered?", answer: "Waiting periods apply for certain pre-existing conditions." },
      { question: "Can I use hospitals outside Nigeria?", answer: "Premium plans (Blueberry, Blackberry, Raspberry) offer specific coverage in India and Africa." }
    ],
    premiumHighlights: "Access top-tier hospitals without worrying about out-of-pocket expenses.",
    whyChoose: ["Extensive hospital network", "Telemedicine included", "Transparent limits"]
  },
  {
    id: "corp-health",
    slug: "corporate-health-plans",
    category: "Health",
    name: "Corporate Health Plans",
    tagline: "Comprehensive Healthcare for Your Team",
    overview: "Group health insurance for businesses. Covers all employees under a single corporate policy. Customizable plans based on company needs.",
    benefits: [
      "Customized benefit design",
      "Employee wellness programs",
      "Dedicated account management",
      "Nationwide hospital network access",
      "24/7 customer support"
    ],
    features: [
      { label: "Customization", value: "Fully tailored to company budget" },
      { label: "Network", value: "Tiered access options" }
    ],
    eligibility: ["Registered companies with 10+ employees"],
    exclusions: ["Standard exclusions (customizable)"],
    faqs: [
      { question: "Can dependents be included?", answer: "Yes, plans typically cover the employee, spouse, and up to 4 children." }
    ],
    premiumHighlights: "Keep your workforce healthy, happy, and productive.",
    whyChoose: ["Flexible plan design", "Data analytics reporting", "Superior service"]
  },
  {
    id: "family-health",
    slug: "family-health-plans",
    category: "Health",
    name: "Family Health Plans",
    tagline: "Keep Your Whole Family Protected",
    overview: "Affordable comprehensive health coverage for the entire family unit. Covers spouse and up to 4 children under a unified plan.",
    benefits: [
      "Shared limits or individual limits",
      "Maternity and antenatal care",
      "Pediatric care and immunizations",
      "Dental and optical benefits",
      "Telemedicine for the whole family"
    ],
    features: [
      { label: "Coverage", value: "Principal, Spouse + 4 Children" },
      { label: "Plans", value: "Matches Retail tiers" }
    ],
    eligibility: ["Families"],
    exclusions: ["Cosmetic procedures", "Unprescribed drugs"],
    faqs: [
      { question: "What if I have more than 4 children?", answer: "Additional children can be added for an extra premium." }
    ],
    premiumHighlights: "One plan, complete protection for the people you love most.",
    whyChoose: ["Family discounts", "Comprehensive maternity", "Easy administration"]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(p => p.category === category);
};
