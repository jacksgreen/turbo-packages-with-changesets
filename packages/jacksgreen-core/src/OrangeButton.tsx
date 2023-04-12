import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function OrangeButton(props: ButtonProps) {
  return <button>{props.children}</button>;
}

OrangeButton.displayName = "OrangeButton";
