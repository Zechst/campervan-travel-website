import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Logo & Icons
const brandLogo = "/logos/brand-logo.svg";
const menuIcon = <Bars3Icon className="block h-6 w-6  text-gray-300" />;

// Navigation Content
const navigation = [
  { name: "Campervan" },
  { name: "Experiences" },
  { name: "About Us" },
  { name: "Terms & Conditions" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <nav className="pt-20 px-10 sm:px-20 lg:px-32 relative flex h-16 items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <Image width={32} height={32} src={brandLogo} />
      </div>
      <div className="hidden sm:ml-6 md:block">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-slate-900 hover:bg-opacity-50 hover:text-white",
                "rounded-3xl px-3 py-2 text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="block md:hidden p-1 rounded-md hover:bg-slate-900 hover:bg-opacity-50 hover:text-white">
        {menuIcon}
      </div>
    </nav>
  );
}
