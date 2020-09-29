import React from "react";

export default function Button({children}) {
  return (
    <button onClick={() => console.log('btn clicked')}>{children}</button>
  );
}
