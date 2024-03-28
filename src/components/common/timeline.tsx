import Image from "next/image";
import React from "react";

interface TimelineProps {
  children: React.ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
      {children}
    </ul>
  );
}

interface LineProps {
  disableEnd?: boolean;
  disableStart?: boolean;
  children: React.ReactNode;
  logo?: string;
}

export function Line({ disableEnd, disableStart, children, logo }: LineProps) {
  return (
    <li>
      {!disableStart && <hr className="bg-secondary" />}
      {logo && (
        <div className="timeline-middle">
          <Image
            src={logo}
            className="object-contain h-16 w-16 p-2"
            width={50}
            height={50}
            alt="Logo"
          />
        </div>
      )}
      <div className="timeline-end mb-10">{children}</div>
      {!disableEnd && <hr className="bg-secondary" />}
    </li>
  );
}
