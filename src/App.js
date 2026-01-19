import logo from './logo.svg';
import './App.css';
import Great from './components/greet';
import Welcome from './components/welcome'; 
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Great />
      <Welcome />
      <Home />
    </div>
  );
}

export default App;
