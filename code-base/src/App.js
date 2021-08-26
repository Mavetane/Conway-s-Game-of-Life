import './App.css';
import Grid from './components/grid/Grid'

function App() {
  return (
    <div className="App">
      <header className="App-header" data-testid="header">
        Conway's Game Of Life
      </header>
      <Grid />
    </div>
  );
}

export default App;
