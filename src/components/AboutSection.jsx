export default function AboutSection() {
  return (
    <section className="py-24 bg-black text-white">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

        {/* IMAGE SIDE */}
        <div className="relative">
          <img
            src="src/assets/image3.jpg"
            className="w-full h-125 object-cover rounded-2xl shadow-2xl"
          />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl"></div>
        </div>

        {/* TEXT SIDE */}
        <div>

          <h2 className="text-4xl font-bold mb-6 tracking-wide">
            Our Story
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            At <span className="text-yellow-500 font-semibold">Dark Ember</span>,
            we believe fragrance is more than scent — it is identity.
            Each perfume is crafted with precision, blending rare ingredients
            to create a lasting impression.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Inspired by elegance, mystery, and timeless beauty, our collection
            is designed for those who move with confidence and leave a signature
            wherever they go.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500">10+</h3>
              <p className="text-sm text-gray-400">Luxury Scents</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-500">50K+</h3>
              <p className="text-sm text-gray-400">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-500">5★</h3>
              <p className="text-sm text-gray-400">Average Rating</p>
            </div>
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold cursor-pointer hover:bg-yellow-400 transition">
            Discover More
          </button>

        </div>

      </div>
    </section>
  );
}