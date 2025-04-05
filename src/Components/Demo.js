import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

function Demo() {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Using useMemo to memoize the result of findNthPrime
  const prime = useMemo(() => findNthPrime(text), [text]);

  console.log("render");
  return (
    <div
      className={
        " flex m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <div>
          <input
            className="border border-black w-72 px-2"
            type="number"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <h1>Prime is : {prime}</h1>
        </div>
      </div>
      <div className="ms-10">
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          {!isDarkTheme ? "🌙" : "☀️"}{" "}
        </button>
      </div>
    </div>
  );
}

export default Demo;
