import "./App.css";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";


// parent component
const App = () => {
  return (
    <div>
      <CardList>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </div>
  );
};


export default App;
