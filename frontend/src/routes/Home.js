import React from "react";
import back from "../gavel-scaled.jpg";
import backp from "../gavel-scaledp.jpg";

function Home() {
  return (
    <>
      <img src={back} className="back" />
      <img src={backp} className="backp" />
    </>
  );
}

export default Home;
