"use client";

import { Button, ButtonProps } from "react-daisyui";
import { useFormStatus } from "react-dom";

export function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button {...props} type="submit" loading={pending} disabled={pending}>
      {props.children || "Submit"}
    </Button>
  );
}
