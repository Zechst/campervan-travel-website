import Headers from "next/head";
import Image from "next/image";
import NavigationBar from "../components/navigation-bar";
import Particle from "../components/particle";

export default function Home() {
  return (
    <div className="h-screen bg-scroll bg-cover bg-center bg-[url('/images/caravan.png')]">
      <Particle />
      <NavigationBar />
      <div className="max-w-4xl py-32 px-32 sm:py-48 lg:py-56">
        <div className="text-start">
          <h1 className="text-4xl font-bold tracking-loose text-white sm:text-6xl">
            Enjoy a Comfortable Vacation With a Campervan
          </h1>
          <p className="mt-6 text-sm  text-[#d9dae8]">
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
      </div>
    </div>
  );
}
