import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { Contact } from "@/components/sections/contact";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with WANA Energy Solutions. Head office at ${COMPANY.address}. Phone ${COMPANY.phone} · Email ${COMPANY.email}.`,
};

export default function ContactPage() {
  return (
    <PageShell
      breadcrumb="Contact"
      eyebrow="Contact"
      eyebrowIcon={<MessageCircle className="h-3.5 w-3.5" />}
      heroImage="/contact.png"
      heroFixed
      heroHeightClassName="min-h-[72vh]"
      heroMinHeight="760px"
      title={
        <>
          Let&rsquo;s power your <span className="text-white">next chapter</span>.
        </>
      }
      description="Talk to our team about home energy, commercial supply, partnership or investment. We respond within one business day."
    >
      <Contact />
    </PageShell>
  );
}
