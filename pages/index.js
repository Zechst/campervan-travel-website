import Headers from "next/head";
import Image from "next/image";
import Particles from "particlesjs";

export default function Home() {
  const backgroundImage = "/images/caravan.jpg";

  return (
    <div className="bg-[#c8ccd7] h-screen">
      <div className="bg-scroll relative isolate overflow-hidden pt-14">
        <Image
          src={backgroundImage}
          fill
          className="-z-10 h-full w-full object-cover"
        />

        <div className="mx-auto max-w-2xl py-32 px-10 sm:py-48 lg:py-56">
          <div className="text-start">
            <h1 className="text-6xl font-bold tracking-loose text-white sm:text-8xl">
              Enjoy a Comfortable Vacation With a Campervan
            </h1>
            <p className="mt-6 text-lg  text-gray-300">
              Explore the nature around you with different experiences. We are
              sure that a holiday exploring new places with a campervan will
              make a different experience.
            </p>
            <div className="mt-10 flex items-center justify-start ">
              <a className="rounded-3xl bg-gradient-to-r from-pink-500 via-pink-500 to-orange-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                Book a Campervan now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
