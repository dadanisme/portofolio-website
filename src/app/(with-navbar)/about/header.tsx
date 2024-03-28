import Image from "next/image";
import React from "react";
import NavLink from "./link";
import { GrOverview } from "react-icons/gr";
import { MdOutlineSchool } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="mt-8 border-b border-b-neutral-content/20">
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <Image
          src="/ramdan.png"
          alt="Ramdan"
          className="rounded-full w-36 h-36 xl:w-24 xl:h-24"
          width={200}
          height={200}
        />

        <div>
          <h3 className="h3 font-semibold text-center xl:text-left text-secondary">
            Muhammad Ramdan
          </h3>
          <h4 className="p text-center xl:text-left">
            A software engineer, gamer, and a music enthusiast.
          </h4>
        </div>
      </div>

      <nav className="mt-4 flex justify-center xl:justify-start w-full">
        <NavLink
          href="/about"
          text="Overview"
          Icon={
            <GrOverview className="inline-block relative bottom-[1.2px] mr-2 text-lg" />
          }
        />
        <NavLink
          href="/about/education"
          text="Education"
          Icon={
            <MdOutlineSchool className="inline-block relative bottom-[1.2px] mr-2 text-lg" />
          }
        />
        <NavLink
          href="/about/experience"
          text="Experience"
          Icon={
            <IoBriefcaseOutline className="inline-block relative bottom-[1.2px] mr-2 text-lg" />
          }
        />
      </nav>
    </div>
  );
}
