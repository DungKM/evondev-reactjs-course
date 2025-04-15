import "./App.css";
import Button from "./components/button/buttton";


// parent component
const App = () => {
  return (
    <div>
      <Button>Primary</Button>
      <Button className="btn--secondary">Secondary</Button>
    </div>
  );
};


export default App;
