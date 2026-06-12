export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold">
              EV <span className="text-green-400">Insights</span>
            </h2>

            <p className="text-gray-400 mt-4">
              Latest EV news, reviews, charging guides and battery technology updates.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>

            <ul className="space-y-2 text-gray-400">
              <li>Electric Cars</li>
              <li>EV Scooters</li>
              <li>Battery Tech</li>
              <li>Charging</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>

            <ul className="space-y-2 text-gray-400">
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-500">
          © 2026 EV Insights. All rights reserved.
        </div>

      </div>
    </footer>
  );
}