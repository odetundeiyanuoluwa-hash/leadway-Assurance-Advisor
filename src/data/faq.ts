export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const faqs: FAQCategory[] = [
  {
    category: "General",
    items: [
      {
        question: "Who is Leadway Assurance?",
        answer: "Leadway Assurance is Nigeria's foremost composite insurer, authorized and regulated by NAICOM (Reg No. 025). Our advisors provide expert guidance on selecting the right insurance and investment products for individuals and businesses across Nigeria."
      },
      {
        question: "Why should I choose Leadway Assurance?",
        answer: "Leadway Assurance has been Nigeria's most trusted composite insurer since 1970. With over ₦523.2 billion in total assets, exceptional financial strength, and a track record of prompt claims settlement, Leadway provides unparalleled security and peace of mind."
      },
      {
        question: "How do I purchase a policy?",
        answer: "You can purchase a policy by contacting us directly via phone, WhatsApp, or the quote form on this website. Our advisors will guide you through all available options, help you select the best plan, and process your application securely."
      },
      {
        question: "Is my data secure?",
        answer: "Yes, your personal and financial information is handled with strict confidentiality in accordance with Leadway's privacy policy and the Nigerian Data Protection Regulation (NDPR)."
      }
    ]
  },
  {
    category: "Life Insurance & Investments",
    items: [
      {
        question: "What is the difference between Term Assurance and Whole Life?",
        answer: "Term Assurance provides coverage for a specific period (e.g., 10 or 20 years) and pays out only if death occurs during that term. Whole Life covers you for your entire lifetime and often includes a savings component (cash value) that grows over time."
      },
      {
        question: "Can I withdraw from my investment plan before maturity?",
        answer: "Yes, you can usually surrender your policy or take a policy loan after a specified period (often 1 or 2 years), but early surrender may attract penalties depending on the terms of the specific plan."
      },
      {
        question: "Are life insurance premiums tax-deductible?",
        answer: "Yes, under Nigerian tax laws, premiums paid for life insurance policies on your life or your spouse's life are eligible for tax relief, subject to certain conditions."
      },
      {
        question: "Do I need a medical examination to get life insurance?",
        answer: "It depends on your age and the sum assured. Many standard plans do not require a medical exam, but high-value covers or specific ages may require a basic medical check-up, paid for by Leadway."
      },
      {
        question: "What happens if I miss a premium payment?",
        answer: "Policies usually have a grace period (typically 30 days). If you miss a payment beyond this, the policy may lapse. However, depending on the accumulated cash value, it might be converted to a paid-up policy or kept active via an automatic premium loan."
      }
    ]
  },
  {
    category: "Health Insurance",
    items: [
      {
        question: "How soon can I use my health insurance after purchasing?",
        answer: "Most outpatient services are available immediately or within a short administrative period. However, waiting periods apply for certain services like maternity (usually 9-10 months) and specific pre-existing conditions or major surgeries."
      },
      {
        question: "Are pre-existing conditions covered?",
        answer: "Yes, but they may be subject to a waiting period (often 6 to 12 months) before coverage applies, depending on the specific retail or corporate plan."
      },
      {
        question: "Can I upgrade my health plan later?",
        answer: "Yes, you can upgrade your plan during your annual renewal period to access higher limits or better hospital tiers."
      },
      {
        question: "What is telemedicine and is it included?",
        answer: "Telemedicine allows you to consult with a doctor via phone or video call without visiting the hospital. Yes, it is included in all our retail health plans."
      },
      {
        question: "Do I have to pay out-of-pocket at the hospital?",
        answer: "No, as long as you visit a hospital within your plan's network and the treatment is covered within your limits, Leadway settles the bill directly with the provider."
      }
    ]
  },
  {
    category: "Claims Process",
    items: [
      {
        question: "How do I file a claim?",
        answer: "To file a claim, notify us immediately or contact the Leadway claims department. You will need to complete a claim form and provide supporting documents (e.g., police report, medical report, estimates) depending on the nature of the claim."
      },
      {
        question: "How long does it take to get paid?",
        answer: "Leadway prides itself on fast claims settlement. Once all required documentation is received and the claim is verified, settlement is typically processed within 48 to 72 hours."
      },
      {
        question: "What documents do I need for a motor insurance claim?",
        answer: "Typically, you need a completed claim form, a police report (if third parties or theft are involved), pictures of the damage, and an estimate of repairs from a garage."
      },
      {
        question: "Can a claim be rejected?",
        answer: "A claim may be rejected if the event falls under policy exclusions, if premiums were unpaid at the time of loss, or if fraudulent information was provided. We ensure all policy terms are clearly explained before purchase."
      },
      {
        question: "Who do I contact in an emergency?",
        answer: "You can contact the Leadway 24/7 customer service line at 01-2700700."
      }
    ]
  },
  {
    category: "Payments",
    items: [
      {
        question: "What payment methods are accepted?",
        answer: "when policy document is filled a virtual account will be opened for you to make subsequent payments."
      },
      {
        question: "Can I pay in installments?",
        answer: "Yes, many of our life and investment plans allow for monthly, quarterly, or semi-annual premium payments to make it easier on your budget."
      },
      {
        question: "Are there extra charges for monthly payments?",
        answer: "Premiums are usually calculated annually. Paying monthly might slightly increase the total annual cost compared to a single annual lump sum, depending on the product."
      },
      {
        question: "Is it safe to pay online?",
        answer: "Yes, all online payments are processed through secure, encrypted payment gateways certified by the CBN."
      }
    ]
  }
];
