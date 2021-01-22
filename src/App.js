import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Book from "./components/Book";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Description from "./components/Description";
import Recommendation from "./components/Recommendation";



class App extends Component {
  constructor() {
    super();
    this.state = {
      Books: [],
      Query: "sql"
    };
  }

  search = () => {
    let query = this.state.Query;
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    fetch(`${BASE_URL}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(`Request rejected with status ${response.status}`);
        }
      })
      .then(result => this.setState({ Books: result.items }))
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.search();
  }

  changeSearch(e) {
    if (e.target.value === "") {
      this.setState({ Query: "Type your term" }, this.search);
    } else {
      this.setState({ Query: e.target.value }, this.search);
    }
  }

  render() {
    const { Books, Query } = this.state;
    let FilterBooks = Books.filter(filterBook =>
      filterBook.volumeInfo.title.toLowerCase().includes(Query.toLowerCase())
    );


    return (
      <div className="App">
        <Header />
        <Description />

        <Search
          SearchProps={this.changeSearch.bind(this)}
          Placeholder={this.state.Query}
        />

        <Book Books={FilterBooks} />

        <Recommendation />
        
        <Footer />
      </div>
    );

  }
}
export default App;
