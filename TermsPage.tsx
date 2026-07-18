import { Layout } from "@/components/layout/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-black text-primary mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6">
          
          <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="text-2xl font-bold text-foreground">2. Role of the Advisor</h2>
          <p>The advisor generate leads. Information provided on this website is for general informational purposes and does not constitute a binding insurance contract.</p>

          <h2 className="text-2xl font-bold text-foreground">3. Quotes and Estimates</h2>
          <p>Any quotes or premium estimates generated through this website or provided via communication channels are indicative and subject to final underwriting approval by Leadway Assurance. Final terms and premiums will be detailed in the official policy document.</p>

          <h2 className="text-2xl font-bold text-foreground">4. Accuracy of Information</h2>
          <p>Users must provide accurate, current, and complete information when requesting quotes or applying for policies. Misrepresentation or non-disclosure of material facts may result in policy cancellation or claim denial.</p>

          <h2 className="text-2xl font-bold text-foreground">5. Intellectual Property</h2>
          <p>The Leadway Assurance name, logos, and product names are trademarks of Leadway Assurance Company Limited. All content on this site is the property of Leadway Assurance.</p>

          <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
          <p>While we strive to keep information accurate and up-to-date, Leadway Assurance shall not be liable for any direct, indirect, incidental, or consequential damages arising out of the use of or inability to use this website.</p>
        </div>
      </div>
    </Layout>
  );
}
