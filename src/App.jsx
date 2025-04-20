// import "./App.css";
// import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import CardTailwind from "./components/card/CardTailwind";

// parent component
const App = () => {
  return (
    <CardList>
      <CardTailwind></CardTailwind>
      {/* <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
    </CardList>
  );
};


export default App;
