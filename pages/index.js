import Headers from "next/head";
import NavigationBarComponent from "../components/navigation-bar";
import ParticleComponent from "../components/particle";

export default function Home() {
  return (
    <div className="h-screen bg-scroll bg-cover bg-center bg-[url('/images/caravan.png')]">
      <ParticleComponent />
      <NavigationBarComponent />
      <main className="max-w-4xl px-10 sm:px-20 lg:px-32 py-32">
        <div className="text-start">
          <h1 className="text-4xl font-bold tracking-loose text-white sm:text-6xl">
            Enjoy a Comfortable Vacation With a Campervan
          </h1>
          <p className="mt-6 text-sm max-w-lg text-[#d9dae8]">
            Explore the nature around you with different experiences. We are
            sure that a holiday exploring new places with a campervan will make
            a different experience.
          </p>
          <div className="mt-10 flex items-center justify-start">
            <a className="rounded-3xl bg-gradient-to-r from-pink-500 via-pink-500 to-orange-300 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400">
              Start Booking Now!
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
