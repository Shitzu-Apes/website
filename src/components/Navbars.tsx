"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  AuroraLogo,
  GithubIcon,
  NearLogo,
  RefFinanceLogo,
  ShitzuLogo,
  TelegramIcon,
  TrisolarisLogo,
  TwitterIcon,
} from "@/components/Icons";
import Link from "next/link";

const navigation = [
  { name: "Blog", href: "/blog", current: false },
  { name: "FAQ", href: "/#FAQ", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="transparent">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
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
                <Link
                  href={"/"}
                  className="flex flex-shrink-0 items-center text-white"
                >
                  <img
                    className="h-8 w-auto mr-2"
                    src={ShitzuLogo.src}
                    alt="Shitzu Logo"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:flex space-x-4">
                  <a
                    href={"https://twitter.com/shitzucommunity"}
                    className={classNames(
                      "rounded-md py-2 text-sm font-medium"
                    )}
                    target="_blank"
                  >
                    <TwitterIcon className="h-6 w-6 text-primary" />
                  </a>
                  <a
                    href={"https://t.me/Shitzu_Community"}
                    className={classNames(
                      "rounded-md py-2 text-sm font-medium"
                    )}
                    target="_blank"
                  >
                    <TelegramIcon className="h-6 w-6 text-primary" />
                  </a>
                  <a
                    href={"https://github.com/Shitzu-Apes"}
                    className={classNames(
                      "rounded-md py-2 text-sm font-medium"
                    )}
                    target="_blank"
                  >
                    <GithubIcon className="h-6 w-6 text-primary" />
                  </a>
                </div>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-5">
                  <div>
                    <Menu.Button className="relative flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 items-center text-primary">
                      <Squares2X2Icon className="h-6 w-6" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem href="https://www.trisolaris.io/#/swap?outputCurrency=0x68e401B61eA53889505cc1366710f733A60C2d41">
                        BUY on{" "}
                        <img
                          className="mx-2 h-4 w-auto rounded-full"
                          src={TrisolarisLogo.src}
                          alt="Ref Finance Logo"
                        />{" "}
                        Trisolaris
                      </MenuItem>
                      <MenuItem href="https://app.ref.finance/#near|token.0xshitzu.near">
                        BUY on{" "}
                        <img
                          className="h-6 w-auto rounded-full mx-2"
                          src={RefFinanceLogo.src}
                          alt="Ref Finance Logo"
                        />
                        Ref
                      </MenuItem>
                      <MenuItem href="https://near.org/marior.near/widget/ShitzuMigrate">
                        Migrate{" "}
                        <img
                          src={AuroraLogo.src}
                          alt="Aurora Logo"
                          className="h-6 mx-2 w-auto rounded-full"
                        />
                        →
                        <img
                          src={NearLogo.src}
                          alt="near Logo"
                          className="h-6 mx-2 w-auto rounded-full"
                        />
                      </MenuItem>
                      <MenuItem href="https://twitter.com/shitzucommunity">
                        <TwitterIcon className="h-6 w-6 mr-2 text-[#1da1f2]" />
                        <span>Twitter</span>
                      </MenuItem>
                      <MenuItem href="https://t.me/Shitzu_Community">
                        <TelegramIcon className="h-6 w-6 mr-2 text-[#2AABEE]" />
                        <span>Telegram</span>
                      </MenuItem>
                      <MenuItem href="https://github.com/Shitzu-Apes">
                        <GithubIcon className="h-6 w-6 mr-2 text-white" />
                        <span>Github</span>
                      </MenuItem>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
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
}

function MenuItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? "bg-gray-700" : "",
            "flex items-center px-4 py-2 text-sm text-gray-200"
          )}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
}
