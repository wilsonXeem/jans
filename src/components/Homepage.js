import React from "react";
import { useNavigate } from "react-router-dom";
import Contestants from "./Contestants";
import banner from "../images/jans.jpeg";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h1 style={{ textAlign: "center" }}>
        QUEST FOR THE CROWN OF MR/MISS FACE OF JANSS '23 - '24. <br /> HOSTED BY COMR.
        MALAKY ARINZECHUKWU (BCH), <br /> JANSS DOS. D' SOCIAL PARAGON
      </h1>
      <div className="queen">
        <img src={banner} alt="" />
      </div>
      <hr />
      <p>
        Click <button onClick={() => navigate("/login")}>HERE</button> to log in
        and vote
      </p>
      <Contestants />
    </div>
  );
}

export default Homepage;
