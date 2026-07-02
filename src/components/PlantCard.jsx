export default function PlantCard({
  image,
  name,
  description,
  price,
}) {
  return (
    <div className="group bg-white/5 backdrop-blur-xl border border-white/20 rounded-[30px] p-6 transition-all duration-300 hover:scale-105 hover:border-green-300 hover:shadow-2xl">

      {/* Plant Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-[180px] sm:w-[220px] md:w-[240px] lg:w-[260px] h-auto object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Plant Name */}
      <h3 className="mt-6 text-2xl md:text-3xl font-semibold text-center">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-4 text-center text-gray-300 text-sm md:text-base leading-7">
        {description}
      </p>

      {/* Price */}
      <h4 className="mt-6 text-center text-2xl md:text-3xl font-bold">
        {price}
      </h4>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

        <button className="border border-white rounded-xl px-6 py-3 hover:bg-white hover:text-black transition">
          Explore
        </button>

        <button className="bg-white text-black rounded-xl px-6 py-3 hover:bg-green-400 hover:text-white transition">
          Buy Now
        </button>

      </div>

    </div>
  );
}