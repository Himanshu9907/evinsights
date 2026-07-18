

// import { Mail, Phone, MapPin, Clock } from "lucide-react";


// export const metadata = {
//   title: "Contact Us",
//   description:
//     "Get in touch with EV Insights Hub for questions, feedback, partnerships and business inquiries.",
// };

// export default function ContactPage() {
//   return (
//     <>
    
//     <main className="bg-black text-white min-h-screen pt-20">

//       {/* Hero Section */}
//       <section className="relative overflow-hidden border-b border-zinc-800">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]"></div>

//         <div className="max-w-7xl mx-auto px-6 py-24 relative text-center">

//           <span className="inline-block px-5 py-2 rounded-full border border-green-500 text-green-400">
//             Contact EV Insights Hub
//           </span>

//           <h1 className="text-5xl md:text-6xl font-bold mt-8">
//             Let's
//             <span className="text-green-400"> Connect</span>
//           </h1>

//           <p className="max-w-3xl mx-auto text-gray-400 text-xl mt-8">
//             Have a question, suggestion, business inquiry or partnership
//             opportunity? We'd love to hear from you.
//           </p>

//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="max-w-7xl mx-auto px-6 py-24">

//         <div className="grid lg:grid-cols-3 gap-10">

//           {/* Left Side */}
//           <div className="space-y-6">

//             <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
//               <Mail className="text-green-400 mb-4" size={28} />

//               <h3 className="text-xl font-bold">
//                 Email Us
//               </h3>

//               <p className="text-gray-400 mt-2">
//                 contact@evinsightshub.com
//               </p>
//             </div>

//             <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
//               <Phone className="text-green-400 mb-4" size={28} />

//               <h3 className="text-xl font-bold">
//                 Phone
//               </h3>

//               <p className="text-gray-400 mt-2">
//                 +91 98765 43210
//               </p>
//             </div>

//             <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
//               <MapPin className="text-green-400 mb-4" size={28} />

//               <h3 className="text-xl font-bold">
//                 Location
//               </h3>

//               <p className="text-gray-400 mt-2">
//                 India
//               </p>
//             </div>

//             <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
//               <Clock className="text-green-400 mb-4" size={28} />

//               <h3 className="text-xl font-bold">
//                 Working Hours
//               </h3>

//               <p className="text-gray-400 mt-2">
//                 Mon - Sat: 9:00 AM - 6:00 PM
//               </p>
//             </div>

//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2">

//             <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

//               <h2 className="text-3xl font-bold mb-8">
//                 Send a Message
//               </h2>

//               <form className="space-y-6">

//                 <div className="grid md:grid-cols-2 gap-6">

//                   <div>
//                     <label className="block mb-2 text-gray-400">
//                       Full Name
//                     </label>

//                     <input
//                       type="text"
//                       placeholder="Your Name"
//                       className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-green-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="block mb-2 text-gray-400">
//                       Email Address
//                     </label>

//                     <input
//                       type="email"
//                       placeholder="you@example.com"
//                       className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-green-500"
//                     />
//                   </div>

//                 </div>

//                 <div>
//                   <label className="block mb-2 text-gray-400">
//                     Subject
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Subject"
//                     className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-green-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2 text-gray-400">
//                     Message
//                   </label>

//                   <textarea
//                     rows="6"
//                     placeholder="Write your message..."
//                     className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-green-500"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-green-500 text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition"
//                 >
//                   Send Message
//                 </button>

//               </form>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* FAQ Section */}
//       <section className="max-w-7xl mx-auto px-6 pb-24">

//         <h2 className="text-4xl font-bold text-center mb-12">
//           Frequently Asked Questions
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">

//           <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
//             <h3 className="font-bold text-xl">
//               Do you accept guest posts?
//             </h3>

//             <p className="text-gray-400 mt-3">
//               Yes, we welcome high-quality EV and sustainability content.
//             </p>
//           </div>

//           <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
//             <h3 className="font-bold text-xl">
//               Can I advertise on EV Insights Hub?
//             </h3>

//             <p className="text-gray-400 mt-3">
//               Yes, contact us for sponsorship and advertising opportunities.
//             </p>
//           </div>

//         </div>

//       </section>

//     </main>
   
//     </>
//   );
// }

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Contact EVInsights Hub | Get in Touch",

  description:
    "Contact EVInsights Hub for business inquiries, feedback, corrections, partnerships or general questions related to electric vehicles.",

  keywords: [
    "Contact EVInsights Hub",
    "EVInsights Contact",
    "Electric Vehicle Website",
    "EV Reviews",
    "EV News",
    "Contact",
  ],
};

export default function ContactPage() {
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
              We'd Love to Hear From You
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Contact
              <span className="text-green-500">
                {" "}
                EVInsights Hub
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-muted">
              Whether you have a question, want to report an issue,
              suggest a correction, discuss a business partnership or
              simply share feedback, our team is always happy to hear
              from you.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <Link
                href="#contact-form"
                className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Send a Message
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-2 rounded-xl border border-theme px-8 py-4 font-semibold transition hover:bg-card"
              >
                About Us

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT CARDS */}

      <section className="mx-auto max-w-7xl px-4 py-20">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* Email */}

          <div className="rounded-3xl border border-theme bg-card p-8 transition hover:-translate-y-1">

            <Mail
              className="mb-5 text-green-500"
              size={34}
            />

            <h3 className="text-xl font-bold">
              Email
            </h3>

            <p className="mt-4 leading-8 text-muted">
              For general questions, corrections and support.
            </p>

            <a
              href="mailto:contact@evinsightshub.com"
              className="mt-6 block font-semibold text-green-500 hover:underline"
            >
              contact@evinsightshub.com
            </a>

          </div>

          {/* Business */}

          <div className="rounded-3xl border border-theme bg-card p-8 transition hover:-translate-y-1">

            <Phone
              className="mb-5 text-green-500"
              size={34}
            />

            <h3 className="text-xl font-bold">
              Business
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Partnership, sponsorship and advertising inquiries.
            </p>

            <p className="mt-6 font-semibold text-green-500">
              business@evinsightshub.com
            </p>

          </div>

          {/* Office */}

          <div className="rounded-3xl border border-theme bg-card p-8 transition hover:-translate-y-1">

            <MapPin
              className="mb-5 text-green-500"
              size={34}
            />

            <h3 className="text-xl font-bold">
              Location
            </h3>

            <p className="mt-4 leading-8 text-muted">
              India
            </p>

            <p className="mt-6 text-sm text-muted">
              We operate as a digital-first automotive information
              platform serving readers across India.
            </p>

          </div>

          {/* Response */}

          <div className="rounded-3xl border border-theme bg-card p-8 transition hover:-translate-y-1">

            <Clock3
              className="mb-5 text-green-500"
              size={34}
            />

            <h3 className="text-xl font-bold">
              Response Time
            </h3>

            <p className="mt-4 leading-8 text-muted">
              We usually respond within
            </p>

            <p className="mt-6 text-2xl font-black text-green-500">
              24–48 Hours
            </p>

          </div>

        </div>

      </section>
            {/* CONTACT FORM */}

      <section
        id="contact-form"
        className="border-y border-theme bg-card/40"
      >
        <div className="mx-auto max-w-7xl px-4 py-24">

          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-green-500">
              Send Us a Message
            </span>

            <h2 className="mt-4 text-4xl font-black">
              We'd Love to Hear From You
            </h2>

            <p className="mt-6 text-lg leading-9 text-muted">
              Have a question, found an error, want to collaborate,
              or simply have feedback? Fill out the form below and
              we'll get back to you as soon as possible.
            </p>

          </div>

          <div className="grid gap-12 lg:grid-cols-3">

            {/* FORM */}

            <div className="lg:col-span-2 rounded-3xl border border-theme bg-background p-8 md:p-10">

              <form className="space-y-8">

                <div className="grid gap-6 md:grid-cols-2">

                  <div>

                    <label className="mb-3 block font-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="
                      w-full
                      rounded-xl
                      border
                      border-theme
                      bg-card
                      px-4
                      py-4
                      outline-none
                      transition
                      focus:border-green-500
                    "
                    />

                  </div>

                  <div>

                    <label className="mb-3 block font-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="
                      w-full
                      rounded-xl
                      border
                      border-theme
                      bg-card
                      px-4
                      py-4
                      outline-none
                      transition
                      focus:border-green-500
                    "
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-3 block font-semibold">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="
                    w-full
                    rounded-xl
                    border
                    border-theme
                    bg-card
                    px-4
                    py-4
                    outline-none
                    transition
                    focus:border-green-500
                  "
                  />

                </div>

                <div>

                  <label className="mb-3 block font-semibold">
                    Message
                  </label>

                  <textarea
                    rows={7}
                    placeholder="Write your message here..."
                    className="
                    w-full
                    rounded-xl
                    border
                    border-theme
                    bg-card
                    px-4
                    py-4
                    outline-none
                    transition
                    focus:border-green-500
                    resize-none
                  "
                  />

                </div>

                <button
                  type="submit"
                  className="
                  rounded-xl
                  bg-green-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:scale-[1.02]
                  hover:bg-green-600
                "
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* SIDE PANEL */}

            <div className="space-y-6">

              <div className="rounded-3xl border border-theme bg-background p-8">

                <h3 className="text-2xl font-bold">
                  Business Inquiries
                </h3>

                <p className="mt-4 leading-8 text-muted">
                  For partnerships, sponsorships, advertising,
                  collaborations or media opportunities, please
                  contact our business team.
                </p>

                <p className="mt-6 font-semibold text-green-500">
                  business@evinsightshub.com
                </p>

              </div>

              <div className="rounded-3xl border border-theme bg-background p-8">

                <h3 className="text-2xl font-bold">
                  Report an Error
                </h3>

                <p className="mt-4 leading-8 text-muted">
                  Found incorrect specifications, pricing or outdated
                  information? Let us know and we'll review it as
                  quickly as possible.
                </p>

              </div>

              <div className="rounded-3xl border border-theme bg-background p-8">

                <h3 className="text-2xl font-bold">
                  Feedback
                </h3>

                <p className="mt-4 leading-8 text-muted">
                  Your suggestions help us improve EVInsights Hub.
                  We genuinely appreciate every message from our
                  readers.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* FAQ */}

      <section className="mx-auto max-w-6xl px-4 py-24">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-black">
            Before You Contact Us
          </h2>

          <p className="mt-6 text-lg leading-9 text-muted">
            Here are answers to some of the most common questions we
            receive from our readers.
          </p>

        </div>

        <div className="mt-16 space-y-6">

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              How quickly will I receive a reply?
            </h3>

            <p className="mt-4 leading-8 text-muted">
              We usually respond within 24–48 business hours depending
              on the nature of your inquiry.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Can I report incorrect specifications?
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Absolutely. Accuracy is important to us. If you notice any
              incorrect specifications, pricing or outdated information,
              please let us know using the contact form.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Do you accept partnership requests?
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Yes. We welcome business partnerships, advertising,
              sponsorships and collaboration opportunities related to
              the EV industry.
            </p>

          </div>

          <div className="rounded-3xl border border-theme bg-card p-8">

            <h3 className="text-xl font-bold">
              Can I suggest an EV for review?
            </h3>

            <p className="mt-4 leading-8 text-muted">
              Definitely. We love reader suggestions and regularly add
              new electric vehicles, comparisons and buying guides based
              on community feedback.
            </p>

          </div>

        </div>

      </section>

      {/* LOCATION */}

      <section className="border-y border-theme bg-card/40">

        <div className="mx-auto max-w-7xl px-4 py-24">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold uppercase tracking-widest text-green-500">
                Our Presence
              </span>

              <h2 className="mt-4 text-4xl font-black">
                Serving EV Enthusiasts Across India
              </h2>

              <p className="mt-8 text-lg leading-9 text-muted">
                EVInsights Hub is a digital-first platform dedicated to
                helping readers across India with trusted electric
                vehicle information, comparisons and buying advice.
              </p>

              <p className="mt-6 text-lg leading-9 text-muted">
                Although we operate online, our goal is to build one of
                India's most trusted destinations for electric vehicle
                knowledge and research.
              </p>

            </div>

            {/* <div
              className="
              flex
              min-h-[320px]
              items-center
              justify-center
              rounded-3xl
              border
              border-dashed
              border-theme
              bg-background
            "
            >

              <div className="text-center">

                <MapPin
                  className="mx-auto mb-5 text-green-500"
                  size={48}
                />

                <h3 className="text-2xl font-bold">
                  India
                </h3>

                <p className="mt-4 text-muted">
                  Interactive Google Map
                  <br />
                  can be integrated here later.
                </p>

              </div>

            </div> */}

            <div className="overflow-hidden rounded-3xl border border-theme shadow-lg">

  <iframe
    title="EVInsights Hub Location"
    src="https://www.google.com/maps?q=Jabalpur&output=embed"
    width="100%"
    height="420"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className="border-0"
  />

</div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section>

        <div className="mx-auto max-w-5xl px-4 py-24 text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-green-500">
            Let's Connect
          </span>

          <h2 className="mt-4 text-5xl font-black leading-tight">

            Help Us Build India's
            <br />

            <span className="text-green-500">
              Most Trusted EV Platform
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-muted">
            Whether you have a question, feedback, correction,
            partnership proposal or simply want to say hello, we'd love
            to hear from you. Every message helps us improve
            EVInsights Hub and better serve the EV community.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              href="/ev"
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
              Explore EV Cars
            </Link>

            <Link
              href="/comparison"
              className="
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
              Compare EVs
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}