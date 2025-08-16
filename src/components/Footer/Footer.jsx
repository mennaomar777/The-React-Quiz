import React from "react";

export default function Footer({ children }) {
  return (
    <footer className="flex justify-between w-full max-w-2xl mx-auto mt-4 sm:mt-6">
      {children}
    </footer>
  );
}
