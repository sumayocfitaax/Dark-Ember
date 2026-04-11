export default function TestimonialSection() {
  return (
    <section className="py-24 bg-black text-white">

      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-16 tracking-wide">
        What Our Customers Say
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* CARD 1 */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition duration-300">

          <p className="text-gray-300 mb-6 leading-relaxed">
            “This perfume is absolutely incredible. The scent lasts all day and feels very luxurious.”
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full ">
                <img className="w-10 h-10 rounded-full object-cover" src="src/assets/profile2.jpg" alt="" />
            </div>
            <div>
              <h4 className="font-semibold">Amina Hassan</h4>
              <p className="text-sm text-gray-400">Verified Buyer</p>
            </div>
          </div>

          <p className="text-yellow-500 mt-4">★★★★★</p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition duration-300">

          <p className="text-gray-300 mb-6 leading-relaxed">
            “Elegant, long-lasting, and unique. I get compliments every time I wear it.”
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full">
                <img className="w-10 h-10 rounded-full object-cover" src="src/assets/profile1.jpg" alt="" />
            </div>
            <div>
              <h4 className="font-semibold">Mohamed Ali</h4>
              <p className="text-sm text-gray-400">Verified Buyer</p>
            </div>
          </div>

          <p className="text-yellow-500 mt-4">★★★★★</p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:scale-105 transition duration-300">

          <p className="text-gray-300 mb-6 leading-relaxed">
            “It feels like a luxury experience in a bottle. Truly premium quality.”
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full ">
                <img className="w-10 h-10 rounded-full object-cover" src="src/assets/profile3.jpg" alt="" />
            </div>
            <div>
              <h4 className="font-semibold">Fatima Noor</h4>
              <p className="text-sm text-gray-400">Verified Buyer</p>
            </div>
          </div>

          <p className="text-yellow-500 mt-4">★★★★★</p>
        </div>

      </div>
    </section>
  );
}