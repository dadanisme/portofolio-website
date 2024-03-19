"use client";
import Background from "@/components/background";
import React, { useState } from "react";
import { IoIosConstruct } from "react-icons/io";
import { Button, Tooltip, Collapse } from "react-daisyui";
import ArrowLink from "@/components/common/arrow-link";

export default function ComingSoon() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetch("/api/encourage", { method: "GET" });

      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-svh">
      <Background />
      <div className="text-center relative z-10 flex flex-col items-center">
        <IoIosConstruct className="text-9xl text-primary" />
        <h1 className="text-4xl text-primary font-bold">307</h1>
        <p className="text-lg">Under construction</p>
        {sent ? (
          <div className="mt-4">
            <p className="text-sm text-primary">Email sent, thank you!</p>

            <ArrowLink centered reverse href="/">
              Back to home
            </ArrowLink>
          </div>
        ) : (
          <Tooltip message="Send me an email to encourage me" position="bottom">
            <Button
              color="primary"
              size="sm"
              onClick={handleSubmit}
              className="mt-4"
              loading={loading}
              disabled={loading}
            >
              Encourage me
            </Button>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
