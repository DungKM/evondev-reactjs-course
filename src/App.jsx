// import "./App.css";
import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1db954",
    background: "#f5f5f5",
    text: "#333333",
  },
  fonts: {
    body: "'Poppins', sans-serif",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1440px",
  },
};

// parent component
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card2></Card2>
        {/* <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
      </CardList>
    </ThemeProvider>
  );
};


export default App;
