"use client";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link"
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/logo.png";
import StoreIcon from "@/assets/store.png";
import CollectionIcon from "@/assets/collection.png";
import FeedIcon from "@/assets/feed.png";
import MarketIcon from "@/assets/market.png";
import ProfileIcon from "@/assets/profile.png";
import BellIcon from "@/assets/bell.png";
import SearchIcon from "@/assets/search.png";

const navigation = [
  { name: "Store", href: "#", icon: StoreIcon },
  { name: "Collection", href: "#", icon: CollectionIcon },
  { name: "Feed", href: "#", icon: FeedIcon },
  { name: "Market", href: "#", icon: MarketIcon },
  { name: "Profile", href: "#", icon: ProfileIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <Image className="h-8 w-auto" src={Logo} alt="Your Company" />
                </Link>
                <div className="hidden sm:mx-auto sm:block">
                  <div className="flex space-x-4 mx-auto">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:text-cyan-400",
                          "rounded-md px-3 py-2 text-sm font-medium inline-flex items-center"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          className="w-6 h-6 mr-2"
                        />{" "}
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative p-1 rounded-md bg-gray-600 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <Image alt="" src={BellIcon} className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  className="relative ml-2 p-1 rounded-md bg-gray-600 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <Image alt="" src={SearchIcon} className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
