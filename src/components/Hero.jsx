import MyVideo from '../assets/video2.mp4'
export default function Hero(){
  return(
    <div className="relative h-screen w-full overflow-hidden">
      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={MyVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* HERO TEXT */}
      <div className="relative z-10 flex items-center flex-col justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Unleash Your Signature Scent
        </h1>

        <p className="text-lg md:text-2xl mt-6 text-amber-500">
          A timeless fragrance crafted for those who move with <br />
          <span className="font-extrabold text-xl md:text-3xl">
            confidence, elegance, and quiet power
          </span>
        </p>
      </div>
    </div>
  )
}