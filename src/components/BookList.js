import React from "react";

const BookList = props => (

  <div
    className="accordion md-accordion"
    id="accordionEx1"
    role="tablist"
  >
    <div className="card">
      <div className="card-header" role="tab" id="headingTwo1">
      <a
          data-parent="#accordionEx1"
          aria-expanded="false"
        >
          <h5 className="mb-0">
            {props.bookItem.volumeInfo.title}
          </h5>
        </a>
      </div>

      <div
        role="tabpanel"
        aria-labelledby="headingTwo1"
        data-parent="#accordionEx1"
      >
      </div>
    </div>
  </div>
);

export default BookList;
