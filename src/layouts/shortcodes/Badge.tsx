import React from "react";

export default function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-blue-50 px-4 py-2 mx-2 my-2 text-md font-sm text-blue-800">
      {label}
    </span>
  );
}
