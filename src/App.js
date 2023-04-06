import { Component } from "react";
import logo from "./logo.svg";

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor(name) {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    // console.log("Constructor");
  }

  componentDidMount() {
    // console.log("componentDidMount");
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users };
          },
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }

  onSearchChange = e => {
            // console.log({startingArr: this.state.monsters})

            const searchField = e.target.value.toLowerCase();
            
            this.setState(
              () => {
              return { searchField };
            },
           

            );
          }


  render() {
    // console.log("render");
    const {monsters, searchField} = this.state;


    const {onSearchChange} = this;


    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });


    return (
      <div className='App'>
        <h1 className='app-title'> MONSTERS ROLODEX</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={"search monsters"}
          className={"monsters-search-box"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
