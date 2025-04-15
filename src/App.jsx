import "./App.css";
import Button from "./components/button/buttton";


// parent component
const App = () => {
  return (
    <div>
      <Button>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  );
};


export default App;
