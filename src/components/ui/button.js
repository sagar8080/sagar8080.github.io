import React from "react";

export function Button({ children, asChild, ...props }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700" {...props}>
      {children}
    </button>
  );
}
