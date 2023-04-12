import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function BlueButton(props: ButtonProps) {
  return <button>{props.children}</button>;
}

BlueButton.displayName = "BlueButton";
