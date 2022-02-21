import "./App.css";
import CardList from "../components/CardList";
import SearchName from "../components/SearchName";
import Scroll from "../components/Scrollcopy";
import { library } from "../library";
import React, { Component } from "react";
import image from "../components/Aubergines.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      vegetable: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    this.setState({ vegetable: library });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { vegetable, searchfield } = this.state;
    const filterVegetables = vegetable.filter(({ name, type }) => {
      return (
        name.toLowerCase().includes(searchfield.toLowerCase()) ||
        type.toLowerCase().includes(searchfield.toLowerCase())
      );
    });

    // si pongo season no funciona pero con type si, se puede hacer mas limpio? check box

    return (
      <div className="tc">
        <h1 style={{ fontSize: "4rem" }}>Vegetables</h1>
        <SearchName searchChange={this.onSearchChange} />
        <Scroll>
          <CardList vegetables={filterVegetables} />
        </Scroll>
        {/* como pongo varios filtros */}
      </div>
    );
  }
}

export default App;
