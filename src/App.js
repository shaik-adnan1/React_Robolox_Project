import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

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

  render() {
    // console.log("render");


    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });


    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={e => {
            // console.log({startingArr: this.state.monsters})

            const searchField = e.target.value.toLowerCase();
            
            this.setState(
              () => {
              return { searchField };
            },
           

            );
          }}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}

        {/* Instead of calling the h1 tag as many times as the data */}

        {/* <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1> */}

        {/* Test state code */}

        {/** <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />

          <p>Hey {this.state.name.firstName}, I work at {this.state.company}</p>
          <button
            onClick={() => {
              this.setState((state, props) => {
                return { name: { firstName: "yousuf", lastName: "adnan" } }; 
              }, 

              () => {
                console.log(this.state)

              });
              // this.state.love_name = "sreya<3";
              // console.log(this.state.love_name)
            }}
          >
            Hi shaik
          </button>
        </header>*/}
      </div>
    );
  }
}

export default App;
