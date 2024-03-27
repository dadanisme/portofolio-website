"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import Rainbow from "../rainbow-text";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
    // enable body scroll
    document.body.style.overflow = "hidden";
  };
  const onClose = () => {
    setOpen(false);
    // disable body scroll
    document.body.style.overflow = "auto";
  };

  return (
    <div className="fixed top-0 right-0 wide-box-x h-20 z-[51] flex items-center justify-center">
      <MdOutlineMenu
        onClick={onOpen}
        className="text-4xl text-secondary cursor-pointer"
      />

      <Backdrop open={open} onClose={onClose} />
      <Menu open={open} onClose={onClose} />
    </div>
  );
}

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

function Backdrop({ open, onClose }: MenuProps) {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 glassmorph",
        "transition-all duration-300",
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
    />
  );
}

function Menu({ open, onClose }: MenuProps) {
  return (
    <div
      className={clsx(
        "fixed left-0 bottom-0 w-full h-96 bg-main-background",
        "transition-all duration-300",
        "border-t-[0.5px] border-neutral p-4",
        open ? "translate-y-0" : "translate-y-full"
      )}
    >
      <MdClose
        onClick={onClose}
        className={clsx(
          "text-2xl text-secondary cursor-pointer",
          "absolute top-4 right-4"
        )}
      />
      <div className="mt-4">
        <h3 className="h4 text-center font-semibold">
          <Rainbow>muhammadramdan.com</Rainbow>
        </h3>

        <p className="p text-center text-neutral-content">
          Where do you want to go?
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <NavLink onClose={onClose} href="/about">
          About
        </NavLink>
        <NavLink onClose={onClose} href="/projects">
          Projects
        </NavLink>
        <NavLink onClose={onClose} href="/contact">
          Contact
        </NavLink>
      </div>

      <div className="absolute bottom-4 left-0 text-center w-full">
        <p className="p text-neutral-content">&copy; 2024 Muhammad Ramdan</p>
      </div>
    </div>
  );
}

interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClose: () => void;
}

function NavLink({ href, children, onClose }: LinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2 font-semibold",
        pathname.includes(href) ? "text-secondary" : "text-neutral-content"
      )}
      onClick={onClose}
    >
      {children}
    </Link>
  );
}
