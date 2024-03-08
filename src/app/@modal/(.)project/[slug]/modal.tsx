"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Modal } from "react-daisyui";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

export default function ProjectModal({ children }: Props) {
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
        "w-[95%] max-w-screen-2xl h-[90%] max-h-screen-2xl p-0",
        "glass-card"
      )}
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal.Legacy>
  );
}
