import aglaonema from "../assets/aglaonema.png";

export default function Hero() {
  return (
    <section className="max-w-[1500px] mx-auto px-6 py-12 lg:py-20">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div className="order-2 lg:order-1 text-center lg:text-left">

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
            Earth's Exhale
          </h1>

          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10">

            <button className="border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black transition">
              Buy Now
            </button>

            <button className="border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black transition">
              Live Demo
            </button>

          </div>

        </div>

        {/* Right Card */}

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">

          <div className="relative w-full max-w-[420px] lg:max-w-[500px] h-[560px] lg:h-[650px] rounded-[45px] border border-white/20 bg-white/5 backdrop-blur-xl overflow-visible">

            {/* Plant */}

            <img
              src={aglaonema}
              alt="Aglaonema Plant"
              className="absolute -top-10 lg:-top-16 left-1/2 -translate-x-1/2 w-[260px] sm:w-[320px] lg:w-[430px] object-contain z-10"
            />

            {/* Bottom Content */}

            <div className="absolute bottom-0 left-0 w-full px-8 lg:px-10 pb-10">

              <p className="text-gray-300 text-lg">
                Indoor Plant
              </p>

              <div className="flex justify-between items-center mt-3">

                <h2 className="text-3xl lg:text-5xl font-light leading-tight">
                  Aglaonema Plant
                </h2>

                <span className="text-4xl cursor-pointer hover:translate-x-1 transition">
                  ›
                </span>

              </div>

              <button className="mt-8 border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black transition">
                Buy Now
              </button>

              <div className="flex justify-center gap-3 mt-10">

                <div className="w-10 h-2 rounded-full bg-white"></div>

                <div className="w-2 h-2 rounded-full bg-white/50"></div>

                <div className="w-2 h-2 rounded-full bg-white/50"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}