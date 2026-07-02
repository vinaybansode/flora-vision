import rosegold from "../assets/rosegold.png";
import secondPlant from "../assets/rosegold2.png";

export default function TrendingPlants() {
  return (
    <section className="max-w-[1500px] mx-auto px-5 lg:px-8 py-20 text-white">

      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-20">
        Our Trendy Plants
      </h2>

      {/* ================= FIRST CARD ================= */}

      <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-[40px] lg:rounded-[80px] overflow-visible mb-24">

        <div className="grid lg:grid-cols-2 items-center gap-8 p-8 lg:p-16">

          {/* Plant Image */}

          <div className="flex justify-center relative">

            <img
              src={rosegold}
              alt="Desk Plant"
              className="w-[260px] sm:w-[350px] md:w-[420px] lg:w-[600px] lg:-mt-36 object-contain"
            />

          </div>

          {/* Text */}

          <div className="text-center lg:text-left">

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              For Your Desk Decorations
            </h3>

            <p className="mt-6 text-gray-300 text-base md:text-lg leading-8">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference! It brings
              freshness, improves focus, and creates a relaxing atmosphere.
            </p>

            <h4 className="text-3xl lg:text-4xl font-semibold mt-8">
              Rs. 599/-
            </h4>

            <button className="mt-8 border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black transition">
              Explore
            </button>

          </div>

        </div>

      </div>

      {/* ================= SECOND CARD ================= */}

      <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-[40px] lg:rounded-[80px] overflow-visible">

        <div className="grid lg:grid-cols-2 items-center gap-8 p-8 lg:p-16">

          {/* Text */}

          <div className="order-2 lg:order-1 text-center lg:text-left">

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              For Your Living Room
            </h3>

            <p className="mt-6 text-gray-300 text-base md:text-lg leading-8">
              A beautiful indoor plant that brings freshness and elegance to
              your living room while improving air quality and enhancing your
              home's aesthetic.
            </p>

            <h4 className="text-3xl lg:text-4xl font-semibold mt-8">
              Rs. 799/-
            </h4>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">

              <button className="border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black transition">
                Explore
              </button>

              <button className="border border-white rounded-xl px-8 py-3 hover:bg-white hover:text-black transition">
                Buy Now
              </button>

            </div>

          </div>

          {/* Plant Image */}

          <div className="order-1 lg:order-2 flex justify-center">

            <img
              src={secondPlant}
              alt="Living Room Plant"
              className="w-[280px] sm:w-[360px] md:w-[430px] lg:w-[620px] lg:-mt-36 object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}