import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-center text-5xl font-bold mb-16">
        Customer Review
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {reviews.map((item) => (
          <div
            key={item.id}
            className="bg-white/5 border border-white/10 rounded-[30px] p-6"
          >
            <h3 className="text-2xl font-bold">
              {item.name}
            </h3>

            <p className="text-yellow-400 mt-2">
              ★★★★★
            </p>

            <p className="text-gray-300 mt-4">
              {item.review}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}