import { Component } from 'react';
import CardList from './components/monster-cards/monster-cards';
import './App.css';
import SearchBox from './components/search-box/search-box';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB9C4LUdskXLLqdljkbNJeIxg3oYlJBut4",
  authDomain: "monster-rolodex-6d006.firebaseapp.com",
  projectId: "monster-rolodex-6d006",
  storageBucket: "monster-rolodex-6d006.appspot.com",
  messagingSenderId: "952141592712",
  appId: "1:952141592712:web:5593da660284a8c18c873d",
  measurementId: "G-BYCX4G2NCZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

  };

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

  };

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <h1 className='website-title'>Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='Search Monsters'
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
};

export default App;
