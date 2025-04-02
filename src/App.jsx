import "./App.css";
import YoutubeItem from "./components/youtube/YoutubeItem";
import YoutubeList from "./components/youtube/YoutubeList";
import { YoutubeData } from "./data";

// parent component
const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubleNumbers = numbers.map((number) => number * 2);
  console.log(YoutubeData);
  const name = "Phan Van Luan";
  return (
    <div>
      <YoutubeList>
        {name}
      </YoutubeList>
    </div>
  );
};


export default App;
