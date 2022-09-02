import Index from '.components/Index'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Index firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
        <Index firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      </div>
    </div>
  );
}

export default App;
