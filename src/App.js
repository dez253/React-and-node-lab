import MyComponent from './MyComponent';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <MyComponent message="Welcome to React!" />
      </header>
    </div>
  );
}

export default App;
