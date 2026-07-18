import Link from "next/link";
import {
  FileText,
  CalendarDays,
  Scale,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | EVInsights Hub",

  description:
    "Read the Terms & Conditions governing the use of EVInsights Hub. Learn about your rights, responsibilities and acceptable use of our website.",

  keywords: [
    "Terms and Conditions",
    "EVInsights Hub",
    "Website Terms",
    "EV Website",
    "Legal",
    "User Agreement",
  ],
};

export default function TermsConditionsPage() {
  return (
    <main className="bg-background text-foreground">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-theme">

        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5" />

        <div className="relative mx-auto max-w-7xl px-4 py-24">

          <div className="mx-auto max-w-4xl text-center">

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-green-500/20
                bg-green-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-green-500
              "
            >
              <FileText size={18} />
              Terms & Conditions
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">

              Terms &
              <span className="text-green-500">
                {" "}
                Conditions
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-muted">
              These Terms & Conditions govern your access to and use of
              EVInsights Hub. By accessing or using our website, you
              agree to comply with these terms and all applicable laws
              and regulations.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <Link
                href="/contact"
                className="
                  rounded-xl
                  bg-green-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                "
              >
                Contact Us
              </Link>

              <Link
                href="/privacy-policy"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-theme
                  px-8
                  py-4
                  font-semibold
                  transition
                  hover:bg-card
                "
              >
                Privacy Policy
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* EFFECTIVE DATE */}

      <section className="mx-auto max-w-7xl px-4 py-16">

        <div className="rounded-3xl border border-theme bg-card p-8">

          <div className="flex flex-wrap items-center gap-4">

            <CalendarDays
              className="text-green-500"
              size={34}
            />

            <div>

              <h2 className="text-2xl font-bold">
                Effective Date
              </h2>

              <p className="mt-2 text-muted">
                Last Updated:
                <strong className="text-foreground">
                  {" "}
                  July 2026
                </strong>
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ACCEPTANCE OF TERMS */}

      <section className="mx-auto max-w-5xl px-4 pb-20">

        <div className="rounded-3xl border border-theme bg-card p-10">

          <div className="mb-8 flex items-center gap-4">

            <Scale
              className="text-green-500"
              size={34}
            />

            <h2 className="text-3xl font-black">
              Acceptance of Terms
            </h2>

          </div>

          <p className="leading-9 text-muted">
            By accessing, browsing or using EVInsights Hub, you confirm
            that you have read, understood and agreed to be bound by
            these Terms & Conditions. If you do not agree with any part
            of these terms, you should discontinue using the website.
          </p>

          <p className="mt-6 leading-9 text-muted">
            These Terms apply to all visitors, readers and users of
            EVInsights Hub, including individuals who access electric
            vehicle reviews, comparison tools, buying guides, news,
            specifications and all other content available on the
            platform.
          </p>

          <p className="mt-6 leading-9 text-muted">
            Your continued use of EVInsights Hub constitutes your
            acceptance of these Terms & Conditions and any future
            updates published on this page.
          </p>

        </div>

      </section>
            {/* WEBSITE USAGE */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-7xl px-4 py-24">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-green-500">
              Website Usage
            </span>

            <h2 className="mt-4 text-4xl font-black">
              Using EVInsights Hub
            </h2>

            <p className="mt-6 text-lg leading-9 text-muted">
              EVInsights Hub is intended to provide reliable
              information, reviews, comparisons and educational
              resources related to electric vehicles. By using our
              website, you agree to use it responsibly and in
              accordance with these Terms.
            </p>

          </div>

          <div className="mt-16 space-y-8">

            <div className="rounded-3xl border border-theme bg-background p-10">

              <h3 className="text-2xl font-bold">
                Permitted Use
              </h3>

              <p className="mt-6 leading-9 text-muted">
                You may access, read and share publicly available
                content from EVInsights Hub for personal,
                informational and non-commercial purposes.
              </p>

              <p className="mt-6 leading-9 text-muted">
                You agree to use the website in a lawful manner that
                does not interfere with the operation, security or
                availability of the platform.
              </p>

            </div>

            <div className="rounded-3xl border border-theme bg-background p-10">

              <h3 className="text-2xl font-bold">
                Account-Free Access
              </h3>

              <p className="mt-6 leading-9 text-muted">
                Most content on EVInsights Hub is available without
                creating an account. If user accounts are introduced
                in the future, additional terms may apply.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* USER RESPONSIBILITIES */}

      <section className="mx-auto max-w-6xl px-4 py-24">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            User Responsibilities
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Your Responsibilities
          </h2>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Provide Accurate Information
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Any information voluntarily submitted through our
              contact forms should be accurate and truthful.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Respect Other Users
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Users must not engage in abusive, defamatory,
              fraudulent or unlawful activities while interacting
              with EVInsights Hub.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Follow Applicable Laws
            </h3>

            <p className="mt-4 leading-8 text-muted">
              You agree to comply with all applicable local,
              national and international laws while using the
              website.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Protect Website Integrity
            </h3>

            <p className="mt-4 leading-8 text-muted">
              You must not attempt to disrupt, damage or interfere
              with the website's operation or security.
            </p>

          </div>

        </div>

      </section>

      {/* INTELLECTUAL PROPERTY */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-5xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h2 className="text-3xl font-black">
              Intellectual Property
            </h2>

            <p className="mt-8 leading-9 text-muted">
              Unless otherwise stated, all content published on
              EVInsights Hub, including articles, text, graphics,
              branding, website design, layouts and original
              editorial material, is the intellectual property of
              EVInsights Hub and is protected by applicable
              copyright and intellectual property laws.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Unauthorized reproduction, distribution,
              modification or commercial use of our original
              content without prior written permission is strictly
              prohibited.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Vehicle names, company names, trademarks and logos
              displayed on the website remain the property of
              their respective owners and are used solely for
              identification, editorial and informational
              purposes.
            </p>

          </div>

        </div>

      </section>

      {/* PROHIBITED ACTIVITIES */}

      <section className="mx-auto max-w-6xl px-4 py-24">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            Acceptable Use
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Prohibited Activities
          </h2>

        </div>

        <div className="mt-16 rounded-3xl border border-theme bg-card p-10">

          <ul className="list-disc space-y-5 pl-6 leading-8 text-muted">

            <li>Attempting to hack, attack or disrupt the website.</li>

            <li>Uploading malicious software or harmful code.</li>

            <li>Using automated bots to scrape or copy content without permission.</li>

            <li>Impersonating another individual or organization.</li>

            <li>Violating any applicable laws or regulations.</li>

            <li>Using EVInsights Hub for illegal, fraudulent or misleading purposes.</li>

            <li>Reproducing substantial portions of our original content without authorization.</li>

          </ul>

        </div>

      </section>
            {/* ACCURACY OF INFORMATION */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-5xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h2 className="text-3xl font-black">
              Accuracy of Information
            </h2>

            <p className="mt-8 leading-9 text-muted">
              EVInsights Hub strives to provide accurate, up-to-date
              and reliable information related to electric vehicles,
              including specifications, pricing, features,
              comparisons and buying guides.
            </p>

            <p className="mt-6 leading-9 text-muted">
              However, vehicle specifications, prices, incentives,
              charging infrastructure and manufacturer information
              may change over time. While we make every reasonable
              effort to keep our content current, we cannot guarantee
              that every piece of information is complete, accurate
              or free from errors at all times.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Readers should independently verify important
              information with the respective vehicle manufacturer,
              authorized dealership or official source before making
              any purchasing or financial decision.
            </p>

          </div>

        </div>

      </section>

      {/* THIRD-PARTY LINKS */}

      <section className="mx-auto max-w-6xl px-4 py-24">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            External Resources
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Third-Party Links
          </h2>

        </div>

        <div className="mt-16 rounded-3xl border border-theme bg-card p-10">

          <p className="leading-9 text-muted">
            EVInsights Hub may include links to third-party websites,
            manufacturer pages, charging providers, government
            portals, dealerships or other external resources for
            informational purposes.
          </p>

          <p className="mt-6 leading-9 text-muted">
            These external websites operate independently and have
            their own privacy policies and terms of use. We do not
            control or guarantee the content, availability,
            security or practices of third-party websites.
          </p>

          <p className="mt-6 leading-9 text-muted">
            Accessing third-party websites is entirely at your own
            discretion and risk.
          </p>

        </div>

      </section>

      {/* DISCLAIMER OF WARRANTIES */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-5xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h2 className="text-3xl font-black">
              Disclaimer of Warranties
            </h2>

            <p className="mt-8 leading-9 text-muted">
              EVInsights Hub is provided on an "as is" and
              "as available" basis without warranties of any kind,
              whether express or implied.
            </p>

            <p className="mt-6 leading-9 text-muted">
              We do not guarantee uninterrupted website
              availability, error-free operation, complete accuracy,
              continuous uptime or compatibility with every device,
              browser or operating system.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Your use of this website is entirely at your own risk.
            </p>

          </div>

        </div>

      </section>

      {/* LIMITATION OF LIABILITY */}

      <section className="mx-auto max-w-6xl px-4 py-24">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            Legal Information
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Limitation of Liability
          </h2>

        </div>

        <div className="mt-16 rounded-3xl border border-theme bg-card p-10">

          <p className="leading-9 text-muted">
            To the maximum extent permitted by applicable law,
            EVInsights Hub and its owners, editors, contributors
            and affiliates shall not be liable for any direct,
            indirect, incidental, consequential or special damages
            arising from the use of or inability to use this
            website.
          </p>

          <p className="mt-6 leading-9 text-muted">
            This includes, but is not limited to, losses resulting
            from reliance on published information, technical
            issues, temporary service interruptions, pricing
            inaccuracies or third-party content.
          </p>

          <p className="mt-6 leading-9 text-muted">
            Users are solely responsible for evaluating information
            before making financial, purchasing or ownership
            decisions related to electric vehicles.
          </p>

        </div>

      </section>

      {/* INDEMNIFICATION */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-5xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h2 className="text-3xl font-black">
              Indemnification
            </h2>

            <p className="mt-8 leading-9 text-muted">
              By using EVInsights Hub, you agree to indemnify and
              hold harmless EVInsights Hub, its owners, authors,
              editors and affiliates from any claims, damages,
              liabilities, costs or expenses arising from your
              violation of these Terms & Conditions or misuse of the
              website.
            </p>

          </div>

        </div>

      </section>
            {/* TERMINATION */}

      <section className="mx-auto max-w-5xl px-4 py-24">

        <div className="rounded-3xl border border-theme bg-card p-10">

          <h2 className="text-3xl font-black">
            Termination of Access
          </h2>

          <p className="mt-8 leading-9 text-muted">
            We reserve the right to suspend, restrict or terminate
            access to EVInsights Hub at any time, without prior
            notice, if a user violates these Terms & Conditions,
            applicable laws or engages in activities that may harm
            the website, its users or its reputation.
          </p>

          <p className="mt-6 leading-9 text-muted">
            Termination of access does not affect any rights or
            obligations that arose before such termination.
          </p>

        </div>

      </section>

      {/* GOVERNING LAW */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-5xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h2 className="text-3xl font-black">
              Governing Law
            </h2>

            <p className="mt-8 leading-9 text-muted">
              These Terms & Conditions shall be governed and
              interpreted in accordance with the laws of India.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Any disputes arising from the use of EVInsights Hub
              shall be subject to the jurisdiction of the competent
              courts in India.
            </p>

          </div>

        </div>

      </section>

      {/* CHANGES TO TERMS */}

      <section className="mx-auto max-w-5xl px-4 py-24">

        <div className="rounded-3xl border border-theme bg-card p-10">

          <h2 className="text-3xl font-black">
            Changes to These Terms
          </h2>

          <p className="mt-8 leading-9 text-muted">
            EVInsights Hub may revise these Terms & Conditions at
            any time to reflect updates in our services, legal
            requirements or operational practices.
          </p>

          <p className="mt-6 leading-9 text-muted">
            Updated versions will always be published on this page
            together with the revised "Last Updated" date.
            Continued use of the website after such updates
            constitutes acceptance of the revised Terms &
            Conditions.
          </p>

        </div>

      </section>

      {/* CONTACT */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-5xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10 text-center">

            <h2 className="text-4xl font-black">
              Contact Us
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-muted">
              If you have any questions regarding these Terms &
              Conditions or require clarification about the use of
              EVInsights Hub, please feel free to contact us.
            </p>

            <div className="mt-10 space-y-3">

              <p className="font-semibold">
                📧 contact@evinsightshub.com
              </p>

              <p className="text-muted">
                EVInsights Hub – India
              </p>

            </div>

            <Link
              href="/contact"
              className="
                mt-10
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-green-500
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-green-600
              "
            >
              Contact Our Team
            </Link>

          </div>

        </div>

      </section>

      {/* FINAL NOTE */}

      <section className="mx-auto max-w-6xl px-4 pb-24">

        <div className="rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-transparent p-10">

          <h2 className="text-3xl font-black">
            Thank You for Visiting EVInsights Hub
          </h2>

          <p className="mt-6 leading-9 text-muted">
            We appreciate your trust in EVInsights Hub as your
            destination for electric vehicle news, reviews,
            comparisons and buying guides. These Terms &
            Conditions are intended to create a transparent,
            secure and reliable experience for every visitor.
          </p>

          <p className="mt-6 leading-9 text-muted">
            By continuing to use EVInsights Hub, you acknowledge
            that you have read, understood and agreed to these
            Terms & Conditions.
          </p>

        </div>

      </section>

    </main>
  );
}