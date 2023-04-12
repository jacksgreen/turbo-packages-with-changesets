import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function RedButton(props: ButtonProps) {
  return <button>{props.children}</button>;
}

RedButton.displayName = "RedButton";
