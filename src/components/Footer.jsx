export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold tracking-widest text-yellow-500">
            Dark Ember
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Luxury fragrances crafted for elegance, confidence, and timeless identity.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">Shop</li>
            <li className="hover:text-yellow-500 cursor-pointer">Collections</li>
            <li className="hover:text-yellow-500 cursor-pointer">About</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <p className="text-gray-400">Email: info@darkEmber.com</p>
          <p className="text-gray-400">Phone: +252 xxx xxx</p>

          {/* Social */}
          <div className="flex gap-4 mt-4 text-gray-400">
            <span className="hover:text-yellow-500 cursor-pointer w-6">
                <img src="src/assets/x.png" alt="" />
            </span>
            <span className="hover:text-yellow-500 cursor-pointer w-6">
                <img src="src/assets/tiktok.png" alt="" />
            </span>
            <span className="hover:text-yellow-500 cursor-pointer w-6">
                <img src="src/assets/pinterest.png" alt="" />
            </span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © 2026 Dark Ember. All rights reserved.
      </div>

    </footer>
  );
}