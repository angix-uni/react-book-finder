import React from "react";
import book1 from "./assets/book1.jpg";
import book2 from "./assets/book2.jpg";
import book3 from "./assets/book3.jpg";

const Recommendation = () => {
    return (
    <section class="bg-secondary p-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col text-center mb-3">
            <h1 className="headers">Monthly recommendation</h1>
            <p class="lead text-light">
              Recommended books for the month of January
            </p>
          </div>
        </div>
 
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
            <img src={book1} alt="Book1" class="card-img-top" className="bookSize" />
              <div class="card-body">
                <div class="card-title">
                  <h3 class="text-muted">Butterfly on the Storm</h3>
                </div>
                <div class="card-text">
                Author: Lucius Walter <br />
                When a young boy from Afghanistan is the victim of a brutal hit-and-run in woods outside Amsterdam <br />
                 journalist Farah Hafez visits the scene, seeking to discover how a child from her homeland ended up here.
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
            <img src={book2} alt="Book2" class="card-img-top" className="bookSize" />
              <div class="card-body">
                <div class="card-title">
                  <h3 class="text-muted">A Heart So Fierce and Broken</h3>
                </div>
                <div class="card-text">
                Author: Kemmerer Brigid <br />
                The curse has been broken but that doesn't mean that prince Rhen will have a peaceful life. <br />
                People say he's not the rightful heir to the throne.
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
            <img src={book3} alt="Book3" class="card-img-top" className="bookSize" />
              <div class="card-body">
                <div class="card-title">
                  <h3 class="text-muted">Butterfly</h3>
                </div>
                <div class="card-text">
                Author: Christiane Bosanquet <br />
                Australia, early 1960's: a young English immigrant's journey. <br />
                The jobs she lost, the men she left, the elopement, the escape to finally meet him, her destiny in Alice Springs. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Recommendation;