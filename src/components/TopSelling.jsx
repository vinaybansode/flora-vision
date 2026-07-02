import PlantCard from "./PlantCard";
import { plants } from "../data/plants";

export default function TopSelling() {
  return (
    <section className="max-w-[1500px] mx-auto px-5 lg:px-8 py-20 text-white">

      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        Our Top Selling Plants
      </h2>

      {/* Plant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            image={plant.image}
            name={plant.name}
            description={plant.description}
            price={plant.price}
          />
        ))}

      </div>

    </section>
  );
}