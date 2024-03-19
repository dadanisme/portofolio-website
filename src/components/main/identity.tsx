import React from "react";
import Rainbow from "../rainbow-text";
import {
  MdWhatsapp,
  MdOutlineDownload,
  MdOutlineArrowRightAlt,
} from "react-icons/md";
import Footer from "./footer";
import Link from "next/link";
import ArrowLink from "../common/arrow-link";

export default function Identity() {
  return (
    <section className="w-full xl:w-2/5 sticky-top">
      <h1 className="h2 font-extrabold text-center xl:text-left relative">
        <Rainbow>Muhammad Ramdan</Rainbow>
      </h1>

      <h2 className="h5 font-semibold text-center xl:text-left">
        Software Engineer
      </h2>

      <p className="p text-center xl:text-left mt-4">
        Skilled in
        <span className="text-warning font-bold"> web</span>,
        <span className="text-secondary font-bold"> cloud</span>,
        <span className="text-info font-bold"> machine learning</span>, and
        <span className="text-warning font-bold"> mobile</span> development.
        Always eager to learn new things.
      </p>

      <ArrowLink className="mt-4" href="/about">
        More about me
      </ArrowLink>

      <div className="flex justify-center xl:justify-start mt-8">
        <a
          href="https://wa.me/6285889838142?text=Hello%20Ramdan!"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary glassmorph btn-outline"
        >
          <MdWhatsapp className="text-xl" />
          Contact
        </a>

        <a
          href="/MuhammadRamdan_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary ml-4 glassmorph btn-outline"
        >
          <MdOutlineDownload className="text-xl" />
          Resume
        </a>
      </div>

      <div className="hidden xl:block">
        <Footer />
      </div>
    </section>
  );
}
