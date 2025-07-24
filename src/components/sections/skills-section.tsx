"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Users,
  Award,
  MessageSquare,
  Lightbulb,
  Presentation,
  LucideIcon,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

interface SkillLogoProps {
  Icon?: LucideIcon;
  image?: { src: string; alt: string };
  label: string;
  colorClass?: string;
}

const SkillLogo = ({ Icon, image, label, colorClass }: SkillLogoProps) => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 group">
      <div className="transition-all duration-300 hover:scale-110">
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={64}
            height={64}
            className="w-32 h-32 object-contain"
          />
        )}
        {Icon && !image && (
          <div className="transition-all duration-300 hover:scale-110">
            <Icon
              className={`w-24 h-24 ${colorClass || "text-muted-foreground"}`}
            />
          </div>
        )}
      </div>
      <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </span>
    </div>
  );
};

interface AutoScrollCarouselProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "forward" | "backward";
}

const AutoScrollCarousel = ({
  children,
  speed = 3000,
  direction = "forward",
}: AutoScrollCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      direction: direction === "forward" ? "ltr" : "rtl",
    },
    [Autoplay({ delay: speed, stopOnInteraction: false })]
  );

  return (
    <div className="overflow-hidden mask-fade" ref={emblaRef}>
      <div className="flex">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex-[0_0_auto]">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and methodologies I use to build exceptional products
          </p>
        </div>

        {/* Technical Skills Auto-Scroll */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <Code className="w-7 h-7 text-primary" />
            Technical Skills
          </h3>
          <AutoScrollCarousel speed={2000} direction="forward">
            {technicalSkills.map((skill, index) => (
              <SkillLogo key={index} image={skill.image} label={skill.label} />
            ))}
          </AutoScrollCarousel>
        </div>

        {/* Soft Skills Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <Users className="w-7 h-7 text-secondary" />
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 hover:scale-105"
              >
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <div className="p-4 bg-background/80 backdrop-blur-sm rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <skill.Icon className={`w-12 h-12 ${skill.colorClass}`} />
                  </div>
                  <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

const technicalSkills: Array<{
  image: { src: string; alt: string };
  label: string;
}> = [
  {
    image: { src: "/icons/javascript.svg", alt: "JavaScript" },
    label: "JavaScript",
  },
  {
    image: { src: "/icons/typescript.svg", alt: "TypeScript" },
    label: "TypeScript",
  },
  {
    image: { src: "/icons/swift.svg", alt: "Swift" },
    label: "Swift",
  },
  {
    image: { src: "/icons/python.svg", alt: "Python" },
    label: "Python",
  },
  {
    image: { src: "/icons/cplusplus.svg", alt: "C++" },
    label: "C++",
  },
  {
    image: { src: "/icons/react.svg", alt: "React" },
    label: "React",
  },
  {
    image: { src: "/icons/nextjs.svg", alt: "Next.js" },
    label: "Next.js",
  },
  {
    image: { src: "/icons/svelte.svg", alt: "Svelte" },
    label: "Svelte",
  },
  {
    image: { src: "/icons/nodejs.svg", alt: "Node.js" },
    label: "Node.js",
  },
  {
    image: { src: "/icons/laravel.svg", alt: "Laravel" },
    label: "Laravel",
  },
  {
    image: { src: "/icons/aws.svg", alt: "AWS" },
    label: "AWS Certified",
  },
  {
    image: { src: "/icons/gcp.svg", alt: "Google Cloud Platform" },
    label: "Google Cloud",
  },
  {
    image: { src: "/icons/apple.svg", alt: "Apple" },
    label: "Apple Developer",
  },
  {
    image: { src: "/icons/firebase.svg", alt: "Firebase" },
    label: "Firebase Expert",
  },
];

const softSkills: Array<{
  Icon: LucideIcon;
  label: string;
  colorClass: string;
}> = [
  {
    Icon: Users,
    label: "Team Leadership",
    colorClass: "text-blue-500",
  },
  {
    Icon: Lightbulb,
    label: "Problem Solving",
    colorClass: "text-yellow-500",
  },
  {
    Icon: MessageSquare,
    label: "Communication",
    colorClass: "text-green-500",
  },
  {
    Icon: Presentation,
    label: "Public Speaking",
    colorClass: "text-purple-500",
  },
];
