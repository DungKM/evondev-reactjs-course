// import "./App.css";
import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";


// parent component
const App = () => {
  return (
    <div>
      <GlobalStyles>

      </GlobalStyles>
      <CardList>
        <Card2></Card2>
        {/* <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
      </CardList>
    </div>
  );
};


export default App;
