import React, { Component } from "react";

class Book extends Component {
  render() {
    let anchorLink = "collapseTwo";

    return (
      <div className="container accordion_style">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div
              className="accordion md-accordion"
              id="accordionEx1"
              role="tablist"
              aria-multiselectable="true"
            >
              {this.props.Books.map((book, id) => {
                return (
                  <div key={id} className="card card_style">
                    <div className="card-header" role="tab" id="headingTwo1">
                        <h5>
                          {book.volumeInfo.title}
                          
                        </h5>
                    </div>

                    <div
                      id={`${anchorLink}${id}`}

                      role="tabpanel"
                      aria-labelledby="headingTwo1"
                      data-parent="#accordionEx1"
                    >
                      <div className="card-body">
                        <div className="row row_info">
                          <div className="col-sm-8">
                            <p>
                              <b>Author(s):</b> {book.volumeInfo.authors}
                            </p>
                            <p>
                              <b>No of pages:</b> {book.volumeInfo.pageCount}
                            </p>
                            <p>
                              <b>Rating:</b> {book.volumeInfo.ratingsCount}
                            </p>
                            <p>
                              <b>Publisher:</b> {book.volumeInfo.publisher}
                            </p>
                            <a
                              className="btn btn-default btn_custom"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={book.saleInfo.buyLink}
                            >
                              Buy this Book
                            </a>
                          </div>
                          <div className="col-sm-4">
                            <img
                              src={
                                book.volumeInfo.imageLinks !== undefined
                                  ? book.volumeInfo.imageLinks.thumbnail
                                  : ""
                              }
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="description_book">
                          <p>
                            {}
                            <b>Description</b>
                            <br />
                            {book.searchInfo !== undefined
                              ? book.searchInfo.textSnippet
                              : "No description"}
                          </p>
                          
                        </div>
                      </div>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
