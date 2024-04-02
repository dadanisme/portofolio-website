"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Modal } from "react-daisyui";
import clsx from "clsx";
import ProjectSlug from "@/app/project/[slug]/page";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ProjectModal({ children, className }: Props) {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  const closeModal = () => {
    setOpen(false);

    setTimeout(() => {
      router.back();
    }, 300);
  };

  return (
    <Modal.Legacy
      open={open}
      onClickBackdrop={closeModal}
      className={clsx(
        "w-[95%] xl:w-[100%] max-w-screen-2xl h-[90%] max-h-screen-2xl p-0",
        "glassmorph border border-secondary"
      )}
    >
      <Modal.Body className={clsx(className)}>{children}</Modal.Body>
    </Modal.Legacy>
  );
}
