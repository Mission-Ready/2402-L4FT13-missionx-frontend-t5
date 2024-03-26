import React from "react";
import instructions from "../../../public/images/projects/Project01-instructions.png";

import "./css_components/Instructions.css";

function Instructions() {
  return (
    <>
      <div className="instructions-background">
        Instructions
        <h1>1. JOIN SCRATCH</h1>
        <p>
          If you haven’t used Scratch before, you will need to join Scratch
          first.
        </p>
        <p> Go to https://scratch.mit.edu. Click on Join Scratch.</p>
        <div>
          <img
            className="instructions-img"
            src={instructions}
            alt="Project01-instructions"
            img
          />
        </div>
        <p>
          Follow the instructions to join. You will need a username and a
          password that you will remember. If possible, you should also verify
          your email address so that you can Share projects later. Ask your
          teacher to help with this step if you don’t have an email address, or
          if you are not sure what to do.
        </p>
      </div>
    </>
  );
}

export default Instructions;
