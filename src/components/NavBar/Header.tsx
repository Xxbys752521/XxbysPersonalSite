import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import headerNavLinks from "data/headerNavLinks";
import siteMetadata from "data/siteMetadata";
import Logo from "./logo";
import ThemeSwitch from "../ThemeSwitch";
import MobileNav from "./MobileNav";

function Header() {
  const router = useRouter();
  const [hovered, sethovered] = useState<string | null>(null);
  return (
    <header className="flex items-center justify-between py-10">
      <MobileNav />
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <a className="relative flex items-center justify-between gap-3 p-1 text-2xl font-semibold duration-200 ease-in-out rounded-md md:p-3 ">
            <span className="relative z-10">
              <Logo />
            </span>
            <span className="relative z-10 hidden md:block">
              {siteMetadata.headerTitle}
            </span>
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-center text-base leading-5 ">
        <div className="hidden md:block">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <motion.a
                onMouseEnter={() => sethovered(link.title)}
                onMouseLeave={() => sethovered(null)}
                className={classNames(
                  "p-1 duration-200 relative ease-in-out rounded-md md:p-4 cursor-pointer",
                  {
                    "text-subtle font-medium": link.href != router.asPath,
                    "text-text  font-bold ": link.href == router.asPath,
                  }
                )}
              >
                <AnimatePresence>
                  {hovered == link.title && (
                    <motion.span
                      layoutId="hover"
                      className="absolute inset-0 z-0 w-full h-full rounded-md bg-overlay"
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{link.title}</span>
              </motion.a>
            </Link>
          ))}
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
