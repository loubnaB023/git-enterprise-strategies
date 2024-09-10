import logo from './gator.gif';  //updated the import variable to match the teammate's variable name
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
                  Hello World! This is our team project.  {/* Accept the teammate's changes */}
        </p>	
      </header>
    </div>
  );
}

export default App;
