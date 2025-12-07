import "./styles/main.scss";
import React from "react";

export const metadata = {
  title: "Futuristic Todo",
  description: "C++ Powered WebAssembly Todo App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
