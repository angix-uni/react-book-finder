import React from "react";

const BookList = props => (

  <div
    className="accordion md-accordion"
    id="accordionEx1"
    role="tablist"
    aria-multiselectable="true"
  >
    <div className="card">
      <div className="card-header" role="tab" id="headingTwo1">
      <a
          className="collapsed"
          data-toggle="collapse"
          data-parent="#accordionEx1"
          href="#collapseTwo1"
          aria-expanded="false"
          aria-controls="collapseTwo1"
        >
          <h5 className="mb-0">
            {props.bookItem.volumeInfo.title}
            <i className="fas fa-angle-down rotate-icon" />
          </h5>
        </a>
      </div>

      <div
        id="collapseTwo1"
        className="collapse"
        role="tabpanel"
        aria-labelledby="headingTwo1"
        data-parent="#accordionEx1"
      >
      </div>
    </div>
  </div>
);

export default BookList;
