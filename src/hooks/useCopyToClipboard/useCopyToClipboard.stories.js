import React, { useState, useRef } from "react";
import { useCopyToClipboard } from "./useCopyToClipboard";

export default {
  title: "Hooks/useCopyToClipboard",
  component: useCopyToClipboard
};

export const UseCopyToClipboardView = args => {
  const ref = useRef(null);
  const [input, setInput] = useState("");
  const [saved, setSaved] = useState(null);
  const values = useCopyToClipboard(saved);
  return (
    <div>
      <input
        ref={ref}
        onChange={e => setInput(e.target.value)}
        style={{ width: 100 }}
      />
      <button
        onClick={() => {
          setSaved(input);
          ref.current.value = "";
          ref.current.focus();
        }}
      >
        Click to copy
      </button>
      <ul>
        {values.map(value => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
