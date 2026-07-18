export interface Testimonial {
  id: string;
  name: string;
  location: string;
  product: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Adebayo Johnson",
    location: "Lagos",
    product: "Leadway Investment Plan",
    rating: 5,
    text: "The Leadway Investment Plan has been a game-changer for my finances. The team at Leadway guided me through the entire process and my funds have grown steadily. The free life cover is a bonus I didn't expect. Highly recommend their professional service.",
    date: "March 2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    name: "Chidinma Okafor",
    location: "Abuja",
    product: "Education Target Plan Plus",
    rating: 5,
    text: "As a mother of three, securing my children's education is my top priority. Leadway's Education Target Plan was explained perfectly to me, and now I rest easy knowing their future is covered no matter what happens. The milestone cash benefits are a brilliant feature.",
    date: "January 2024",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    name: "Emeka Nwosu",
    location: "Port Harcourt",
    product: "Comprehensive Motor Insurance",
    rating: 4,
    text: "I had a minor accident last month and the claims process was incredibly smooth. Leadway followed up personally to ensure everything was sorted within 48 hours. Excellent response time and very professional. I've already referred three colleagues.",
    date: "February 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "4",
    name: "Fatimah Bello",
    location: "Ibadan",
    product: "Retail Health Plan (Blueberry)",
    rating: 5,
    text: "The Blueberry health plan has been a lifesaver for my family. Access to premium hospitals without any out-of-pocket stress. I visited Lagoon Hospital twice this year and paid nothing. Leadway's customer service is top-notch.",
    date: "April 2024",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "5",
    name: "Musa Aliyu",
    location: "Kano",
    product: "SME Business Insurance",
    rating: 5,
    text: "Running a wholesale business in Kano comes with real risks. Leadway's Lifestyle+ SME package covers my warehouse, stock, and liability all in one policy. I had a break-in last year and the payout was swift. Great advisory and even better claims service.",
    date: "May 2024",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "6",
    name: "Grace Okonkwo",
    location: "Lagos",
    product: "Term Assurance",
    rating: 5,
    text: "I needed an affordable life cover for my young family and Leadway recommended the Term Assurance plan. The premium is budget-friendly and the coverage is more than substantial. The process from application to policy issuance was seamless and professional.",
    date: "June 2024",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "7",
    name: "Emmanuel Udeh",
    location: "Enugu",
    product: "Deferred Annuity Plan",
    rating: 4,
    text: "Planning for retirement felt overwhelming until I consulted Leadway. The Deferred Annuity Plan is exactly what I needed to supplement my pension. The daily interest accrual is transparent, and the team checks in periodically to update me on my portfolio.",
    date: "July 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "8",
    name: "Oluwaseun Badmus",
    location: "Lagos",
    product: "Home Insurance",
    rating: 5,
    text: "Insuring my property with Leadway was the best decision I made this year. The documentation process was seamless, and the rate was very competitive. When I experienced minor flood damage in July, the assessment was done within days and payment followed shortly.",
    date: "August 2024",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "9",
    name: "Chukwudi Nwachukwu",
    location: "Abuja",
    product: "Group Life Assurance",
    rating: 5,
    text: "Leadway handles the Group Life policy for all 47 staff in my company. The onboarding was smooth, documentation was well organized, and the team responds promptly to all inquiries. When one of our employees passed away, the family received their benefit within two weeks. Leadway is a reliable partner.",
    date: "September 2024",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "10",
    name: "Ify Okoro",
    location: "Lagos",
    product: "Leadway Investment Plan (LIP)",
    rating: 5,
    text: "I invested in the Leadway Investment Plan (LIP) five years ago. My investment returned at the upper end of the projections — better than other options I considered — and the free life cover gave me peace of mind. The maturity payout exceeded my expectations and secured a downpayment for my home.",
    date: "November 2024",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "11",
    name: "Ngozi Eze",
    location: "Enugu",
    product: "Education Target Plan Plus (ESP)",
    rating: 5,
    text: "Saving with the ESP gave me a clear plan for my child's education. Even after a family tragedy, the sum assured was paid to my beneficiary, ensuring school fees were covered. The milestone cash benefits made it easy to pay for tuition at key stages — I couldn't ask for a better solution for my children's future.",
    date: "December 2024",
    avatar: "https://images.unsplash.com/photo-1545996124-1a1b7d1c2f39?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "12",
    name: "Babatunde Ola",
    location: "Ibadan",
    product: "Deferred Annuity Plan",
    rating: 5,
    text: "I chose the Deferred Annuity Plan after comparing payouts from several institutions. The annuity payments I now receive are higher than offers from other financial institutions I reviewed, and the lifetime income plus life cover gives me confidence I won't outlive my savings.",
    date: "june 2025",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "13",
    name: "Adeola Adebayo",
    location: "Lagos",
    product: "Leadway Smart Cash Savings Plan",
    rating: 5,
    text: "The Leadway Smart Cash Savings Plan helped me accumulate enough money to pay six months' rent without stress. The quarterly savings reminders and flexible contribution schedule made it easy to stay on track, and I now have a reliable reserve for emergencies.",
    date: "october 2025",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "14",
    name: "Oluchi Ifeanyi",
    location: "Onitsha",
    product: "Leadway Investment Plan (LIP)",
    rating: 5,
    text: "I saved steadily with the Leadway Investment Plan (LIP) and reached my goal of buying a car within two years. The growth on my investment was better than I expected, and the built-in life cover reassured me my family is protected while I work toward bigger goals.",
    date: "November 2025",
    avatar: "https://images.unsplash.com/photo-1545996124-1a1b7d1c2f39?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "15",
    name: "Kemi Alade",
    location: "Abuja",
    product: "Leadway Target Plan",
    rating: 5,
    text: "Saving for a house felt impossible until I took the Leadway Target Plan. The structured contributions helped me build a mortgage deposit, and the confidence of life cover means my family is protected even if I am no longer here.",
    date: "April 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "16",
    name: "Suleiman Musa",
    location: "Kano",
    product: "Education Target Plan Plus",
    rating: 5,
    text: "I saved consistently with the Education Target Plan Plus so I could finally fund a family trip abroad. The plan’s milestone benefits and clear progress made it possible to travel comfortably while still keeping my children’s education secure.",
    date: "May 2026",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
  }
];
