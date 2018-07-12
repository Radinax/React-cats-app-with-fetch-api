import React, { Component } from "react";
import styled from "styled-components";

//Components
import CatList from "./components/CatList/catList";
import SearchBox from "./components/SearchBox/searchBox";

//Includes
import "./Assets/css/default.min.css";

const Title = styled.h1`
  text-align: center;
  padding: 20px;
  font-size: 60px;
  font-family: "Trebuchet MS", Verdana, sans-serif;
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7);
  color: white;
  &:hover {
    transition: 0.5s ease;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ cats: data }));
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div>
        <Title> Adopt Highly Trained Cats Flippy Cats!</Title>
        <SearchBox searchChange={this.onSearchChange} />
        <CatList style={{ margin: "5px" }} cats={filteredCats} />
      </div>
    );
  }
}

export default App;
