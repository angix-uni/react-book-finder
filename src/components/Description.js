import React from "react";
import step1 from "./assets/step1.jpg";

import step3 from "./assets/step3.jpg";

const Description = () => {
    return (
    <section class="bg-light p-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col text-center mb-3">
            <h1 className="headers">How to use?</h1>
            <p class="lead text-secondary">
              Now you can find books in any topic that interests you in few seconds!
            </p>
          </div>
        </div>
 
      <div class="step">
        <div class="row">
          <div class="col" >
            <img
              src={step1}
              alt="Step1"
              className="desc"
            />
            <h2 class="text-info my-3">Step 1</h2>
            <p class="text-muted">
              Type your title into search bar.
            </p>
          </div>

          <div class="col" >
            <img
              src={step3}
              alt="Step2"
              className="desc"
            />
            <h2 class="text-info my-3">Step 2</h2>
            <p class="text-muted">
             Choose the book that interests you!
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
    )
}
export default Description;