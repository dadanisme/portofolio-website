"use client";
import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";

export default function TechSlider() {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Stack src="/ts.png" alt="TypeScript" />
      <Stack src="/tw.svg" alt="Tailwind CSS" />
      <Stack src="/react.png" alt="React" />
      <Stack src="/nextjs.svg" alt="Next.js" />
      <Stack src="/redux.png" alt="Redux" />
      <Stack src="/python.png" alt="Python" />
      <Stack src="/firebase.png" alt="Firebase" />
      <Stack src="/google-cloud.svg" alt="Google Cloud" />
    </Slider>
  );
}

function Stack({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={100}
      height={100}
      className="w-16 h-16 object-contain"
      title={alt}
    />
  );
}
