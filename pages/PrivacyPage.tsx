import { Layout } from "@/components/layout/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-black text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-6">
          <p>Last updated: January 2025</p>
          
          <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
          <p>This Privacy Policy explains how Leadway Assurance collects, uses, and protects your personal information when you use this website and our services.</p>
          
          <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6">
            <li>Personal identification information (Name, email address, phone number, date of birth, etc.)</li>
            <li>Financial and occupational information required for insurance quotes</li>
            <li>Usage data and cookies to improve website functionality</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
          <p>Your information is used exclusively to:</p>
          <ul className="list-disc pl-6">
            <li>Provide accurate insurance quotes and advisory services</li>
            <li>Process policy applications with Leadway Assurance</li>
            <li>Communicate with you regarding your policies or inquiries</li>
            <li>Improve our services and website user experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground">4. Data Protection and Security</h2>
          <p>We are committed to ensuring your information is secure. We implement appropriate technical and organizational measures to safeguard your personal data in compliance with the Nigerian Data Protection Regulation (NDPR) and Leadway Assurance corporate policies.</p>

          <h2 className="text-2xl font-bold text-foreground">5. Third-Party Sharing</h2>
          <p>We do not sell, distribute, or lease your personal information to third parties. Your data is only shared with Leadway Assurance Company Limited for the explicit purpose of underwriting and policy administration.</p>

          <h2 className="text-2xl font-bold text-foreground">6. Your Rights</h2>
          <p>You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us using the details provided on the Contact page.</p>
        </div>
      </div>
    </Layout>
  );
}
