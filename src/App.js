import React from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import Search from "./components/search/Search";

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      monsters: [],
      search: "",
    };
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ monsters: json }));
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search handleChange={this.handleChange} searchText="monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
