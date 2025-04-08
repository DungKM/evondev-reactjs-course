import "./App.css";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
import Toggle from "./components/toggle/Toggle";


// parent component
const App = () => {
  return (
    <div>
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      <Game></Game>
    </div>
  );
};


export default App;
