// Code Keypad Component Here
import React from "react";

function Change() {
  console.log("Entering password...");
}

function Keypad() {
  console.log("Entering Password..");
  return (
    <div>
      <input type="password" onChange={Change} />
    </div>
  );
}

export default Keypad;
