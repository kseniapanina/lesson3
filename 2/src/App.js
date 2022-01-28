
import './App.css';
import { List } from './List';

const names = ["Arkadiya","Snezhana", "Viktorina", "Glafira", "Angela", "Vladlena",  "Savina", "Vera", "Agafya", "Vilena", "Renata" ]; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <List items={names} />
      </header>
    </div>
  );
}

export default App;
