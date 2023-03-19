import Head from "next/head";

import LogoCloudComponent from "../components/logo-cloud";
import HeroContent from "../components/hero-content";
import NavigationBarComponent from "../components/navigation-bar";
import ParticleComponent from "../components/particle";
import Bonfire from "../components/animation/bonfire/bonfire";

export default function Home() {
  return (
    <>
      <Head>
        <title>Campervan Travel</title>
      </Head>
      <div className="relative h-screen bg-cover bg-center bg-[url('/images/caravan.png')]">
        <ParticleComponent />
        <div className="absolute top-2/4 h-40 w-full">
          <div className="absolute left-2/4 h-full w-40">
            <Bonfire />
          </div>
        </div>

        <NavigationBarComponent />
        <HeroContent />
        <LogoCloudComponent />
      </div>
    </>
  );
}
