import Headers from "next/head";

import LogoCloudComponent from "../components/logo-cloud";
import HeroContent from "../components/hero-content";
import NavigationBarComponent from "../components/navigation-bar";
import ParticleComponent from "../components/particle";

export default function Home() {
  return (
    <div className="h-screen bg-scroll bg-cover bg-center bg-[url('/images/caravan.png')]">
      <ParticleComponent />
      <NavigationBarComponent />
      <HeroContent />
      <LogoCloudComponent />
    </div>
  );
}
