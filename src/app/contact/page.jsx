// export default function ContactPage() {
//   return (
//     <main className="bg-black text-white min-h-screen">
//       <div className="max-w-4xl mx-auto px-6 py-20">
//         <h1 className="text-5xl font-bold mb-8">
//           Contact Us
//         </h1>

//         <p className="text-gray-300">
//           Email: contact@evinsights.com
//         </p>
//       </div>
//     </main>
//   );
// }

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with EV Insights Hub for questions, feedback, partnerships and business inquiries.",
};

export default function ContactPage() {
  return (
    <>
    <Navbar />
    <main className="bg-black text-white min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative text-center">

          <span className="inline-block px-5 py-2 rounded-full border border-green-500 text-green-400">
            Contact EV Insights Hub
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-8">
            Let's
            <span className="text-green-400"> Connect</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-400 text-xl mt-8">
            Have a question, suggestion, business inquiry or partnership
            opportunity? We'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <Mail className="text-green-400 mb-4" size={28} />

              <h3 className="text-xl font-bold">
                Email Us
              </h3>

              <p className="text-gray-400 mt-2">
                contact@evinsightshub.com
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <Phone className="text-green-400 mb-4" size={28} />

              <h3 className="text-xl font-bold">
                Phone
              </h3>

              <p className="text-gray-400 mt-2">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <MapPin className="text-green-400 mb-4" size={28} />

              <h3 className="text-xl font-bold">
                Location
              </h3>

              <p className="text-gray-400 mt-2">
                India
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <Clock className="text-green-400 mb-4" size={28} />

              <h3 className="text-xl font-bold">
                Working Hours
              </h3>

              <p className="text-gray-400 mt-2">
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Send a Message
              </h2>

              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block mb-2 text-gray-400">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-400">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-green-500"
                    />
                  </div>

                </div>

                <div>
                  <label className="block mb-2 text-gray-400">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-400">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-4 focus:outline-none focus:border-green-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-500 text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="font-bold text-xl">
              Do you accept guest posts?
            </h3>

            <p className="text-gray-400 mt-3">
              Yes, we welcome high-quality EV and sustainability content.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="font-bold text-xl">
              Can I advertise on EV Insights Hub?
            </h3>

            <p className="text-gray-400 mt-3">
              Yes, contact us for sponsorship and advertising opportunities.
            </p>
          </div>

        </div>

      </section>

    </main>
    <Footer />
    </>
  );
}