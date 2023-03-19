import Image from "next/image";

// Logos
const natGeoLogo = "/logos/nat-geo-logo.svg";
const skyTravelLogo = "/logos/sky-travel-logo.svg";
const airbnbLogo = "/logos/airbnb-logo.svg";

export default function LogoCloud() {
  return (
    <div className="py-20 sm:py-0 px-10 sm:px-20 lg:px-32">
      <h2 className="font-bold text-white text-3xl">Featured Clients</h2>
      <div className="flex gap-x-8 sm:gap-x-6 mt-5">
        <Image width={110} height={30} src={natGeoLogo} />
        <Image width={110} height={30} src={skyTravelLogo} />
        <Image width={100} height={30} src={airbnbLogo} />
      </div>
    </div>
  );
}
