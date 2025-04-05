import React, { useRef, useState } from "react";

function Demo2() {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0); //return obj {current: 0}

  return (
    <div className="w-96 h-96 m-2 p-2 border border-black bg-black text-white">
      <div>
        <button
          className="m-4 p-4 border-2 border-white  bg-blue-600 rounded-t-sm font-bold"
          onClick={() => {
            x = x + 1;
            console.log("x=", x);
          }} >Increase X</button>
        <span> let= {x}</span>
      </div>
      <div>
        <button
          className="m-4 p-4 border border-white  bg-blue-600 rounded-t-sm font-bold"
          onClick={() => {
            setY(y + 1);
          }} >Increase Y </button>
        <span> State= {y}</span>
      </div>
      <div>
        <button
          className="m-4 p-4 border border-white  bg-blue-600 rounded-t-sm font-bold"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=", ref.current);
          }}>Increase Ref</button>
        <span> Ref= {ref.current}</span>
      </div>
    </div>
  );
}

export default Demo2;
