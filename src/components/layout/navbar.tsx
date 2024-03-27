"use client";

import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import { Navbar as DSNavbar } from "react-daisyui";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdChevronLeft, MdOutlineMenu } from "react-icons/md";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  const [transparent, setTransparent] = useState(true);
  const pathname = usePathname();

  const isTransparent = useMemo(() => transparent, [transparent, , pathname]);

  useEffect(() => {
    // initialize the state based on the current scroll position
    setTransparent(window.scrollY === 0);

    const handleScroll = () => {
      const scroll = Math.min(
        1,
        Math.max(0, window.scrollY / window.innerHeight)
      );

      if (scroll === 0) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DSNavbar
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "box-x flex items-center justify-between border-b-[0.5px] h-20",
        isTransparent
          ? "bg-opacity-0 border-b-transparent"
          : "border-b-neutral-content/20 glassmorph"
      )}
    >
      <Link href="/">
        <MdChevronLeft className="text-4xl text-secondary" />
      </Link>

      <div className={clsx("hidden xl:block", "flex")}>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </DSNavbar>
  );
}

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: LinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2",
        pathname.includes(href) ? "text-secondary" : "text-neutral-content"
      )}
    >
      {children}
    </Link>
  );
}
