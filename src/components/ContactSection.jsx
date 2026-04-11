export default function ContactSection() {
  return (
    <section
      className="relative py-24 text-white"
      style={{
        backgroundImage: "url('src/assets/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Glass Card */}
        <div className="bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 rounded-2xl p-10">

          {/* Title */}
          <h2 className="text-4xl font-bold text-center mb-8">
            Get In Touch
          </h2>

          <p className="text-center text-gray-300 mb-10">
            Have a question or want to collaborate? Send us a message.
          </p>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/5 border border-white/20 outline-none text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/5 border border-white/20 outline-none text-white"
            />

          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full mt-6 p-3 rounded-lg bg-white/5 border border-white/20 outline-none text-white"
          ></textarea>

          {/* Button */}
          <button className="w-full mt-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-400 transition shadow-lg">
            Send Message
          </button>

        </div>

      </div>
    </section>
  );
}