import React from "react";
import Rainbow from "../rainbow-text";
import {
  MdWhatsapp,
  MdOutlineDownload,
  MdOutlineArrowRightAlt,
} from "react-icons/md";
import Footer from "./footer";
import Link from "next/link";

export default function Identity() {
  return (
    <section className="w-full lg:w-2/5 sticky-top">
      <h1 className="h2 font-extrabold text-center lg:text-left relative lg:-left-1">
        <Rainbow className="lg:pl-1">Muhammad Ramdan</Rainbow>
      </h1>

      <h2 className="h5 font-semibold text-center lg:text-left">
        Software Engineer
      </h2>

      <p className="p text-center lg:text-left mt-4">
        Skilled in
        <span className="text-warning font-bold"> web</span>,
        <span className="text-secondary font-bold"> cloud</span>,
        <span className="text-info font-bold"> machine learning</span>, and
        <span className="text-warning font-bold"> mobile</span> development.
        Always eager to learn new things.
      </p>

      <Link
        href="/about"
        className="mt-4 block text-center lg:text-left text-primary font-bold hover:underline"
      >
        More about me <MdOutlineArrowRightAlt className="inline" />
      </Link>

      <div className="flex justify-center lg:justify-start mt-8">
        <a
          href="https://wa.me/6285889838142?text=Hello%20Ramdan!"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary glassmorph btn-outline"
        >
          <MdWhatsapp className="text-lg" />
          Contact
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary ml-4 glassmorph btn-outline"
        >
          <MdOutlineDownload className="text-lg" />
          Resume
        </a>
      </div>

      <div className="hidden lg:block">
        <Footer />
      </div>
    </section>
  );
}
