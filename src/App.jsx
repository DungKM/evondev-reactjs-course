import "./App.css";
import { YoutubeData } from "./YoutubeData";

// parent component
const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubleNumbers = numbers.map((number) => number * 2);
  console.log(YoutubeData);
  return (
    <div className="youtube-list">
      {/* children components  */}
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          title={item.title}
          channel={item.channel}
          avatar={item.avatar}
        ></YoutubeItem>
      ))}
    </div>
  );
};

// Props -> properties
function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div
        className="youtube-image"
      >
        <img
          src={props.image}
          alt="random"
        />
      </div>
      <div className="youtube-footer">
        <img
          src={props.avatar || "https://picsum.photos/200/200"}
          alt=""
          className="youtube-avatar"
        />
        <div className="youtube-infor">
          <h3 className="youtube-title">
            {props.title || "This is example of title"}
          </h3>
          <h4 className="youtube-channel">
            {props.channel || "This is example of channel name"}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
