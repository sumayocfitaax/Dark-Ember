export default function ShopSection() {
  return (
    <section className="py-20 bg-black text-white">

      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-12 tracking-wide">
        Featured Collection
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* CARD 1 */}
        <div className="relative group overflow-hidden rounded-2xl">
          <img
            src="src/assets/image1.jpg"
            className="w-full h-100 object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Details */}
            <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-xl font-bold">Noir Essence</h3>
              <p className="text-gray-300">$120</p>
              <button className="mt-3 px-4 py-2 cursor-pointer bg-yellow-500 text-black rounded-full">
                Buy Now
              </button>
            </div>
          </div>

        {/* CARD 2 */}
        <div className="relative group overflow-hidden rounded-2xl">
          <img
            src="src/assets/image2.jpg"
            className="w-full h-100 object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

          <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-xl font-bold">CHANEL</h3>
            <p className="text-gray-300">$296</p>
            <button className="mt-3 px-4 py-2 bg-yellow-500 text-black rounded-full">
              Buy Now
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="relative group overflow-hidden rounded-2xl">
          <img
            src="src/assets/perfume1.jpg"
            className="w-full h-100 object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

          <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-xl font-bold">COCO NOIR</h3>
            <p className="text-gray-300">$95</p>
            <button className="mt-3 px-4 py-2 bg-yellow-500 text-black rounded-full">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}