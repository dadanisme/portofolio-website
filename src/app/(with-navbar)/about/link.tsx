"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  href: string;
  text: string;
  Icon: React.ReactNode;
}

export default function NavLink({ href, text, Icon }: LinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-2",
        pathname === href
          ? "text-secondary border-b border-b-secondary"
          : "text-neutral-content"
      )}
    >
      {Icon}
      <span
        className={clsx(
          pathname === href ? "inline-block" : "hidden xl:inline-block"
        )}
      >
        {text}
      </span>
    </Link>
  );
}
