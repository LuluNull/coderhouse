
import './App.css';
import Header from './components/Header/Header';
import ItemContainer from './components/ItemContainer/ItemContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemContainer greeting = 'Lulu'/>
    </div>
  );
}

export default App;
