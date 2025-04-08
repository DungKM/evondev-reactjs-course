import "./App.css";
import Counter from "./components/counter/Counter";
import Toggle from "./components/toggle/Toggle";


// parent component
const App = () => {
  return (
    <div>
      <Toggle></Toggle>
      <Counter></Counter>
    </div>
  );
};


export default App;
