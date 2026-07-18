import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { products } from "@/data/products";
import { Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ADVISOR_WHATSAPP = "2347030770719";
const ADVISOR_EMAIL = "ia.leadway@gmail.com";

const NIGERIAN_STATES = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
  "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT – Abuja","Gombe",
  "Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos",
  "Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto",
  "Taraba","Yobe","Zamfara",
];

const formSchema = z.object({
  fullName:                 z.string().min(2, "Full name is required."),
  email:                    z.string().email("Invalid email address."),
  phone:                    z.string().min(10, "Phone number is required."),
  dateOfBirth:              z.string().min(1, "Date of birth is required."),
  gender:                   z.string().min(1, "Gender is required."),
  maritalStatus:            z.string().min(1, "Marital status is required."),
  occupation:               z.string().min(1, "Occupation is required."),
  employer:                 z.string().optional(),
  address:                  z.string().min(5, "Residential address is required."),
  state:                    z.string().min(1, "State is required."),
  policyType:               z.string().min(1, "Policy type is required."),
  product:                  z.string().min(1, "Please select a product."),
  sumAssured:               z.string().min(1, "Coverage amount is required.").regex(/^[0-9]+$/, "Enter a valid numeric amount."),
  policyTerm:               z.string().optional(),
  paymentFrequency:         z.string().optional(),
  criticalIllness:          z.boolean().optional(),
  permanentDisability:      z.boolean().optional(),
  beneficiary:              z.string().optional(),
  medicalHistory:           z.string().optional(),
  notes:                    z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadFormProps {
  defaultProduct?: string;
  className?: string;
}

export function LeadForm({ defaultProduct = "", className = "" }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "", email: "", phone: "", dateOfBirth: "",
      gender: "", maritalStatus: "", occupation: "", employer: "",
      address: "", state: "", policyType: "", product: defaultProduct,
      sumAssured: "", policyTerm: "", paymentFrequency: "",
      criticalIllness: false, permanentDisability: false,
      beneficiary: "", medicalHistory: "", notes: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    const productLabel = products.find(p => p.slug === values.product)?.name ?? values.product;

    const waLines = [
      `Hello Leadway Assurance! I would like a quote for *${productLabel}*.`,
      ``,
      `📋 *Client Filing Details:*`,
      `Full Name:      ${values.fullName}`,
      `Date of Birth:  ${values.dateOfBirth}`,
      `Gender:         ${values.gender}`,
      `Marital Status: ${values.maritalStatus}`,
      `Phone:          ${values.phone}`,
      `Email:          ${values.email}`,
      ``,
      `💼 *Employment:*`,
      `Occupation:     ${values.occupation}`,
      ...(values.employer ? [`Employer:       ${values.employer}`] : []),
      ``,
      `📍 *Address:*`,
      `${values.address}, ${values.state} State`,
      ``,
      `🛡️ *Coverage Details:*`,
      `Policy Type:    ${values.policyType}`,
      `Product:        ${productLabel}`,
      `Coverage Amount: ₦${values.sumAssured}`,
      ...(values.policyTerm ? [`Policy Term:    ${values.policyTerm}`] : []),
      ...(values.paymentFrequency ? [`Payment Frequency: ${values.paymentFrequency}`] : []),
      ...(values.criticalIllness ? [`Critical Illness Cover: Yes`] : [`Critical Illness Cover: No`]),
      ...(values.permanentDisability ? [`Permanent Disability Cover: Yes`] : [`Permanent Disability Cover: No`]),
      ...(values.beneficiary ? [`Beneficiary:    ${values.beneficiary}`] : []),
      ...(values.medicalHistory ? [`Medical History: ${values.medicalHistory}`] : []),
      ...(values.notes ? [``, `📝 Notes: ${values.notes}`] : []),
      ``,
      `Please contact me at your earliest convenience. Thank you.`,
    ];
    const whatsappUrl = `https://wa.me/${ADVISOR_WHATSAPP}?text=${encodeURIComponent(waLines.join("\n"))}`;
    setWaUrl(whatsappUrl);

    // Open WhatsApp SYNCHRONOUSLY before any await
    const waWindow = window.open(whatsappUrl, "_blank");
    if (!waWindow) {
      toast.info("Popup blocked", { description: "Click 'Open WhatsApp' below to send your details." });
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${ADVISOR_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject:        `Quote Request: ${productLabel} — ${values.fullName}`,
          _template:       "table",
          _captcha:        "false",
          "Full Name":     values.fullName,
          "Date of Birth": values.dateOfBirth,
          "Gender":        values.gender,
          "Marital Status":values.maritalStatus,
          "Phone":         values.phone,
          "Email":         values.email,
          "Occupation":    values.occupation,
          "Employer":      values.employer || "—",
          "Address":       `${values.address}, ${values.state} State`,
          "Policy Type":   values.policyType,
          "Product":       productLabel,
          "Coverage Amount": values.sumAssured ? `₦${values.sumAssured}` : "—",
          "Policy Term":   values.policyTerm || "—",
          "Payment Frequency": values.paymentFrequency || "—",
          "Critical Illness Cover": values.criticalIllness ? "Yes" : "No",
          "Permanent Disability Cover": values.permanentDisability ? "Yes" : "No",
          "Beneficiary":   values.beneficiary || "—",
          "Medical History": values.medicalHistory || "—",
          "Notes":         values.notes || "—",
        }),
      });
      if (response.ok) {
        const result = await response.json();
        if (result.success === "true" || result.success === true) {
          toast.success("Quote sent!", { description: "Confirmation email dispatched. We'll be in touch within 24 hours." });
        } else {
          toast.error("Email delivery failed", { description: "Use WhatsApp below to reach us directly." });
        }
      } else {
        toast.error("Email delivery failed", { description: "Use WhatsApp below to reach us directly." });
      }
    } catch {
      toast.error("Email could not be sent", { description: "Your WhatsApp message was opened successfully." });
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
    }
  }

  if (isSuccess) {
    return (
      <div className={`p-6 md:p-8 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-xl text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Quote Request Submitted!</h3>
        <p className="text-green-700 dark:text-green-300 mb-6 text-sm">
          Your full details have been sent via email and WhatsApp. Our team will respond within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {waUrl && (
            <Button className="bg-[#25D366] hover:bg-[#20b858] text-white gap-2" onClick={() => window.open(waUrl, "_blank")}>
              <FaWhatsapp className="w-5 h-5" /> Open WhatsApp Again
            </Button>
          )}
          <Button onClick={() => setIsSuccess(false)} variant="outline">Submit Another Request</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary mb-1">Client Filing Details</h3>
        <p className="text-muted-foreground text-sm">
          Complete all sections so we can prepare an accurate, personalised quote for you.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          {/* ── Section 1: Personal Info ── */}
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 pb-1 border-b border-border">
              1. Personal Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>
                  <FormControl><Input placeholder="Surname, First Name, Other Name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="dateOfBirth" render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth <span className="text-destructive">*</span></FormLabel>
                  <FormControl><Input type="date" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="gender" render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender <span className="text-destructive">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="maritalStatus" render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status <span className="text-destructive">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Single">Single</SelectItem>
                      <SelectItem value="Married">Married</SelectItem>
                      <SelectItem value="Divorced">Divorced</SelectItem>
                      <SelectItem value="Widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>

          {/* ── Section 2: Contact ── */}
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 pb-1 border-b border-border">
              2. Contact Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number <span className="text-destructive">*</span></FormLabel>
                  <FormControl><Input placeholder="08012345678" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address <span className="text-destructive">*</span></FormLabel>
                  <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="address" render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Residential Address <span className="text-destructive">*</span></FormLabel>
                  <FormControl><Input placeholder="House No., Street, City" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="state" render={({ field }) => (
                <FormItem>
                  <FormLabel>State <span className="text-destructive">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-60">
                      {NIGERIAN_STATES.map(s => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>

          {/* ── Section 3: Employment ── */}
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 pb-1 border-b border-border">
              3. Employment / Occupation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField control={form.control} name="occupation" render={({ field }) => (
                <FormItem>
                  <FormLabel>Occupation <span className="text-destructive">*</span></FormLabel>
                  <FormControl><Input placeholder="e.g. Civil Servant, Trader, Doctor" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="employer" render={({ field }) => (
                <FormItem>
                  <FormLabel>Employer / Business Name <span className="text-muted-foreground text-xs">(optional)</span></FormLabel>
                  <FormControl><Input placeholder="Company or business name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>

          {/* ── Section 4: Coverage ── */}
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 pb-1 border-b border-border">
              4. Coverage Requirements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField control={form.control} name="policyType" render={({ field }) => (
                <FormItem>
                  <FormLabel>Policy Type <span className="text-destructive">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select policy type" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Life Insurance">Life Insurance</SelectItem>
                      <SelectItem value="Health Insurance">Health Insurance</SelectItem>
                      <SelectItem value="General Insurance">General Insurance</SelectItem>
                      <SelectItem value="Retirement / Annuity">Retirement / Annuity</SelectItem>
                      <SelectItem value="Group Life">Group Life</SelectItem>
                      <SelectItem value="Investment Plan">Investment Plan</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="product" render={({ field }) => (
                <FormItem>
                  <FormLabel>Product of Interest <span className="text-destructive">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select a product" /></SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-60">
                      {products.map(p => (
                        <SelectItem key={p.id} value={p.slug}>{p.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="sumAssured" render={({ field }) => (
                <FormItem>
                  <FormLabel>Coverage Amount (₦) <span className="text-destructive">*</span></FormLabel>
                  <FormControl><Input type="number" placeholder="e.g. 5000000" min={0} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="policyTerm" render={({ field }) => (
                <FormItem>
                  <FormLabel>Policy Term <span className="text-muted-foreground text-xs">(optional)</span></FormLabel>
                  <FormControl><Input placeholder="e.g. 5 years, 10 years" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="paymentFrequency" render={({ field }) => (
                <FormItem>
                  <FormLabel>Premium Frequency <span className="text-muted-foreground text-xs">(optional)</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select frequency" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Quarterly">Quarterly</SelectItem>
                      <SelectItem value="Semi-Annual">Semi-Annual</SelectItem>
                      <SelectItem value="Annual">Annual</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="criticalIllness" render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div>
                    <FormLabel className="text-sm">Add Critical Illness Cover</FormLabel>
                    <p className="text-xs text-muted-foreground">Include protection for major illnesses like cancer, stroke, and heart attack.</p>
                  </div>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="permanentDisability" render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div>
                    <FormLabel className="text-sm">Add Permanent Disability Cover</FormLabel>
                    <p className="text-xs text-muted-foreground">Cover for loss of income if you become totally disabled.</p>
                  </div>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="beneficiary" render={({ field }) => (
                <FormItem>
                  <FormLabel>Beneficiary Full Name <span className="text-muted-foreground text-xs">(for life plans)</span></FormLabel>
                  <FormControl><Input placeholder="e.g. Spouse, Child's full name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="medicalHistory" render={({ field }) => (
                <FormItem>
                  <FormLabel>Known Medical Conditions <span className="text-muted-foreground text-xs">(optional)</span></FormLabel>
                  <FormControl><Input placeholder="e.g. Hypertension, Diabetes, None" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <div className="mt-4">
              <FormField control={form.control} name="notes" render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes <span className="text-muted-foreground text-xs">(optional)</span></FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any other information you'd like us to know…" className="resize-none" rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 text-base font-bold mt-2 gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <><Loader2 className="h-5 w-5 animate-spin" />Sending Details…</>
            ) : (
              <><FaWhatsapp className="w-5 h-5" />Submit Filing &amp; Get Quote via WhatsApp</>
            )}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Your details are sent directly to your advisor via WhatsApp &amp; email — 100% private, no spam.
          </p>
        </form>
      </Form>
    </div>
  );
}
