import PutComponent from './Components/PutComponent';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';

function App() {
  return (
    <>
      <FunctionalComponent />
      <PutComponent name={"doe jane"} age={60} />
      <PutComponent name={"john smith"} age={45} />
    </>
  );
}

export default App;
