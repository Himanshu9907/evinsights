import Link from "next/link";
import {
  ShieldCheck,
  CalendarDays,
  Lock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | EVInsights Hub",

  description:
    "Read the Privacy Policy of EVInsights Hub to understand how we collect, use, protect and manage your information while using our website.",

  keywords: [
    "Privacy Policy",
    "EVInsights Hub",
    "Data Privacy",
    "Cookies",
    "Google AdSense",
    "Google Analytics",
    "EV Website",
  ],
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck size={18} />
              Your Privacy Matters
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">

              Privacy
              <span className="text-green-500">
                {" "}
                Policy
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-muted">
              At <strong>EVInsights Hub</strong>, protecting your privacy
              is one of our highest priorities. This Privacy Policy
              explains what information we collect, how we use it and
              the choices you have while using our website.
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
                href="/about"
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
                About Us
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

      {/* INTRODUCTION */}

      <section className="mx-auto max-w-5xl px-4 pb-20">

        <div className="rounded-3xl border border-theme bg-card p-10">

          <div className="mb-8 flex items-center gap-4">

            <Lock
              className="text-green-500"
              size={34}
            />

            <h2 className="text-3xl font-black">
              Introduction
            </h2>

          </div>

          <p className="leading-9 text-muted">
            EVInsights Hub is committed to maintaining the trust of its
            readers by protecting personal information and respecting
            user privacy. This Privacy Policy explains how information
            is collected, stored, used and protected when you visit or
            interact with our website.
          </p>

          <p className="mt-6 leading-9 text-muted">
            By accessing or using EVInsights Hub, you acknowledge that
            you have read and understood this Privacy Policy. If you do
            not agree with any part of this policy, you should
            discontinue using the website.
          </p>

          <p className="mt-6 leading-9 text-muted">
            This policy applies to all visitors, readers and users of
            EVInsights Hub across all pages including electric vehicle
            reviews, comparisons, buying guides, news articles and other
            informational content published on our platform.
          </p>

        </div>

      </section>
            {/* INFORMATION WE COLLECT */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-7xl px-4 py-24">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-green-500">
              Information We Collect
            </span>

            <h2 className="mt-4 text-4xl font-black">
              What Information We Collect
            </h2>

            <p className="mt-6 text-lg leading-9 text-muted">
              We only collect information that helps us improve our
              services, maintain website security and provide a better
              browsing experience.
            </p>

          </div>

          <div className="mt-16 space-y-8">

            <div className="rounded-3xl border border-theme bg-background p-10">

              <h3 className="text-2xl font-bold">
                Information You Voluntarily Provide
              </h3>

              <p className="mt-6 leading-9 text-muted">
                When you contact EVInsights Hub through our contact form
                or email, you may voluntarily provide information such
                as your name, email address and the contents of your
                message.
              </p>

              <p className="mt-6 leading-9 text-muted">
                This information is used solely to respond to your
                inquiry, provide support or communicate regarding your
                request.
              </p>

            </div>

            <div className="rounded-3xl border border-theme bg-background p-10">

              <h3 className="text-2xl font-bold">
                Automatically Collected Information
              </h3>

              <p className="mt-6 leading-9 text-muted">
                Like most modern websites, certain technical
                information may be collected automatically whenever you
                visit EVInsights Hub.
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6 text-muted">

                <li>IP address</li>

                <li>Browser type and version</li>

                <li>Device information</li>

                <li>Operating system</li>

                <li>Pages visited</li>

                <li>Time spent on pages</li>

                <li>Referral source</li>

                <li>Approximate geographic location</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* HOW WE USE INFORMATION */}

      <section className="mx-auto max-w-6xl px-4 py-24">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            Usage of Information
          </span>

          <h2 className="mt-4 text-4xl font-black">
            How We Use Your Information
          </h2>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Improve Website Performance
            </h3>

            <p className="mt-4 leading-8 text-muted">
              We analyze visitor behavior to improve navigation,
              website speed and overall user experience.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Respond to Inquiries
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Contact information submitted through our forms is used
              only to respond to your questions or requests.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Website Security
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Technical information may be used to detect spam,
              malicious activity and protect the security of our
              platform.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Content Improvement
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Visitor insights help us publish more useful EV reviews,
              comparisons, buying guides and educational articles.
            </p>

          </div>

        </div>

      </section>

      {/* COOKIES */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-5xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h2 className="text-3xl font-black">
              Cookies Policy
            </h2>

            <p className="mt-8 leading-9 text-muted">
              EVInsights Hub uses cookies and similar technologies to
              improve website functionality, remember user preferences
              and understand how visitors interact with our content.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Cookies are small text files stored on your device by
              your browser. They help us provide a smoother browsing
              experience and improve website performance.
            </p>

            <p className="mt-6 leading-9 text-muted">
              You may disable cookies through your browser settings.
              However, doing so may affect certain website features and
              functionality.
            </p>

          </div>

        </div>

      </section>

            {/* GOOGLE ADSENSE & ANALYTICS */}

      <section className="mx-auto max-w-6xl px-4 py-24">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            Advertising & Analytics
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Google AdSense & Google Analytics
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-muted">
            EVInsights Hub may use trusted third-party services to
            improve website performance, understand visitor behavior and
            display relevant advertisements.
          </p>

        </div>

        <div className="mt-16 space-y-8">

          {/* Google AdSense */}

          <div className="rounded-3xl border border-theme bg-card p-10">

            <h3 className="text-2xl font-bold">
              Google AdSense
            </h3>

            <p className="mt-6 leading-9 text-muted">
              We may display advertisements through Google AdSense.
              Google and its partners may use cookies to serve ads based
              on your previous visits to this and other websites.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Personalized advertising helps users receive more relevant
              advertisements. Users can control or disable personalized
              advertising through their Google Ads Settings.
            </p>

            <p className="mt-6 leading-9 text-muted">
              EVInsights Hub does not control the advertisements shown
              by Google or other advertising partners.
            </p>

          </div>

          {/* Google Analytics */}

          <div className="rounded-3xl border border-theme bg-card p-10">

            <h3 className="text-2xl font-bold">
              Google Analytics
            </h3>

            <p className="mt-6 leading-9 text-muted">
              We may use Google Analytics to better understand how
              visitors interact with our website.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Analytics data may include anonymous information such as
              page views, traffic sources, device type, browser type,
              operating system, approximate location and time spent on
              pages.
            </p>

            <p className="mt-6 leading-9 text-muted">
              This information is used solely for improving website
              performance and user experience.
            </p>

          </div>

        </div>

      </section>

      {/* THIRD-PARTY SERVICES */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-6xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h2 className="text-3xl font-black">
              Third-Party Services
            </h2>

            <p className="mt-8 leading-9 text-muted">
              EVInsights Hub may use trusted third-party tools and
              services to improve website functionality and user
              experience.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-theme bg-card p-6">

                <h3 className="font-bold">
                  Hosting Providers
                </h3>

                <p className="mt-4 leading-8 text-muted">
                  Website hosting and infrastructure services help keep
                  EVInsights Hub secure, reliable and available.
                </p>

              </div>

              <div className="rounded-2xl border border-theme bg-card p-6">

                <h3 className="font-bold">
                  Analytics Providers
                </h3>

                <p className="mt-4 leading-8 text-muted">
                  Analytics tools help us understand visitor behavior
                  and improve our content and website experience.
                </p>

              </div>

              <div className="rounded-2xl border border-theme bg-card p-6">

                <h3 className="font-bold">
                  Advertising Partners
                </h3>

                <p className="mt-4 leading-8 text-muted">
                  Advertising services may display relevant ads while
                  complying with their own privacy policies.
                </p>

              </div>

              <div className="rounded-2xl border border-theme bg-card p-6">

                <h3 className="font-bold">
                  Email Services
                </h3>

                <p className="mt-4 leading-8 text-muted">
                  Email providers may be used to respond to inquiries
                  and communicate with users when necessary.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* THIRD-PARTY LINKS */}

      <section className="mx-auto max-w-5xl px-4 py-24">

        <div className="rounded-3xl border border-theme bg-card p-10">

          <h2 className="text-3xl font-black">
            Third-Party Links
          </h2>

          <p className="mt-8 leading-9 text-muted">
            Our website may contain links to external websites,
            manufacturers, dealerships, government portals or other
            third-party resources.
          </p>

          <p className="mt-6 leading-9 text-muted">
            Once you leave EVInsights Hub, we are not responsible for
            the privacy practices, security or content of those external
            websites. We encourage users to review the privacy policies
            of every third-party website they visit.
          </p>

        </div>

      </section>

      {/* DATA SECURITY */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-5xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h2 className="text-3xl font-black">
              Data Security
            </h2>

            <p className="mt-8 leading-9 text-muted">
              We implement reasonable administrative, technical and
              organizational safeguards to protect the information
              collected through EVInsights Hub.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Although we strive to protect your information, no method
              of transmission over the internet or electronic storage is
              completely secure. Therefore, we cannot guarantee absolute
              security.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Users are encouraged to exercise caution whenever sharing
              personal information online.
            </p>

          </div>

        </div>

      </section>
            {/* DATA RETENTION */}

      <section className="mx-auto max-w-5xl px-4 py-24">

        <div className="rounded-3xl border border-theme bg-card p-10">

          <h2 className="text-3xl font-black">
            Data Retention
          </h2>

          <p className="mt-8 leading-9 text-muted">
            We retain personal information only for as long as
            necessary to fulfill the purposes outlined in this Privacy
            Policy or to comply with applicable legal obligations.
          </p>

          <p className="mt-6 leading-9 text-muted">
            Once the information is no longer required, reasonable
            measures are taken to securely delete or anonymize the
            data whenever possible.
          </p>

        </div>

      </section>

      {/* CHILDREN'S PRIVACY */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-5xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h2 className="text-3xl font-black">
              Children's Privacy
            </h2>

            <p className="mt-8 leading-9 text-muted">
              EVInsights Hub is intended for a general audience and is
              not directed toward children under the age of 13.
            </p>

            <p className="mt-6 leading-9 text-muted">
              We do not knowingly collect personal information from
              children. If you believe that a child has provided
              personal information through our website, please contact
              us so that appropriate action can be taken.
            </p>

          </div>

        </div>

      </section>

      {/* YOUR RIGHTS */}

      <section className="mx-auto max-w-6xl px-4 py-24">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            Your Rights
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Your Privacy Choices
          </h2>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Access Your Information
            </h3>

            <p className="mt-4 leading-8 text-muted">
              You may contact us to inquire about any personal
              information you have voluntarily provided.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Request Corrections
            </h3>

            <p className="mt-4 leading-8 text-muted">
              If you believe your information is inaccurate, you may
              request that it be corrected.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Delete Information
            </h3>

            <p className="mt-4 leading-8 text-muted">
              You may request deletion of information you previously
              submitted, subject to applicable legal obligations.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Cookie Preferences
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Most browsers allow you to manage or disable cookies
              through browser settings at any time.
            </p>

          </div>

        </div>

      </section>

      {/* POLICY CHANGES */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-5xl px-4 py-24">

          <div className="rounded-3xl border border-theme bg-background p-10">

            <h2 className="text-3xl font-black">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-8 leading-9 text-muted">
              We may update this Privacy Policy from time to time to
              reflect changes in our services, legal requirements or
              industry best practices.
            </p>

            <p className="mt-6 leading-9 text-muted">
              Any updates will be published on this page together with
              the revised "Last Updated" date. Continued use of
              EVInsights Hub after changes are posted constitutes
              acceptance of the updated Privacy Policy.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="mx-auto max-w-5xl px-4 py-24">

        <div className="rounded-3xl border border-theme bg-card p-10 text-center">

          <h2 className="text-4xl font-black">
            Contact Us
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-muted">
            If you have any questions about this Privacy Policy or how
            your information is handled, please feel free to contact
            us. We are committed to addressing your concerns in a
            timely and transparent manner.
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
            Contact Our Team
          </Link>

        </div>

      </section>

    </main>
  );
}