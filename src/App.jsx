import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingPlants from "./components/TrendingPlants";
import TopSelling from "./components/TopSelling";
import bgImage from "./assets/background.jpg";

function App() {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="min-h-screen bg-black/30 backdrop-blur-[2px]">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>

          {/* Hero Section */}
          <Hero />

          {/* Trending Plants */}
          <TrendingPlants />

          {/* Top Selling */}
          <TopSelling />

        </main>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/20 py-8">

          <div className="max-w-[1500px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

            <h2 className="text-2xl font-bold">
              🌿 FloraVision
            </h2>

            <p className="text-gray-300 text-center">
              © 2026 FloraVision. All Rights Reserved.
            </p>

          </div>

        </footer>

      </div>
    </div>
  );
}

export default App;