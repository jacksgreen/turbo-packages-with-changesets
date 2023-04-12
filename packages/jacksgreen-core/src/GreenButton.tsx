import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function GreenButton(props: ButtonProps) {
  return <button>{props.children}</button>;
}

GreenButton.displayName = "GreenButton";
