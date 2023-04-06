import { useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  console.log("render");

  const [searchField, setSearchFeild] = useState(""); // [value, setValue]]
  const [title, setTitle] = useState('')
  const [monsters, setMonsters] = useState([]);
  const [filterMonster, setFilterMonsters] = useState(monsters)

  useEffect(() => {
    
      fetch("http://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => setMonsters(users));

  }, [])


  useEffect(() => {
     const newFilteredMonsters = monsters.filter(monster => {
       return monster.name.toLowerCase().includes(searchField);
     });

     setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  // console.log({ searchField });
  
    const onSearchChange = e => {
      const searchFieldString = e.target.value.toLowerCase();
      setSearchFeild(searchFieldString);
    };
  
    const onTitleChange = e => {
      const setTitleString = e.target.value.toLowerCase();
      setTitle(setTitleString);
    };
  
 

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search monsters"}
        className={"monsters-search-box"}
      />
      <br /> 
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder={"set title"}
        className={"title-search-box"}
      />
      <CardList monsters={filterMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor(name) {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     // console.log("Constructor");
//   }

//   componentDidMount() {
//     // console.log("componentDidMount");
//     fetch("http://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           // () => {
//           //   console.log(this.state);
//           // }
//         )
//       );
//   }

//   onSearchChange = e => {
//             // console.log({startingArr: this.state.monsters})

//             const searchField = e.target.value.toLowerCase();

//             this.setState(
//               () => {
//               return { searchField };
//             },

//             );
//           }

//   render() {
//     // console.log("render");
//     const {monsters, searchField} = this.state;

//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>
//         <h1 className='app-title'> MONSTERS ROLODEX</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={"search monsters"}
//           className={"monsters-search-box"}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
