export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid lg:grid-cols-3 gap-10">

        <div>
          <h2 className="text-4xl font-bold">
            🌿 FloraVision
          </h2>

          <p className="mt-4 text-gray-400">
            Bringing nature closer to you.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            Quick Links
          </h3>

          <ul className="space-y-3 mt-4">
            <li>Home</li>
            <li>Plants</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Subscribe
          </h3>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 p-3 rounded-l-xl bg-transparent border border-white/20"
            />

            <button className="bg-white text-black px-5 rounded-r-xl">
              Join
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}