import { WidthFull } from "@mui/icons-material";
import React from "react";
import { useState } from "react";

function Admin() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        style={{ width: "300px", height: "50px" }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button onClick={() => console.log(text)}>Submit</button>
    </div>
  );
}

export default Admin;
