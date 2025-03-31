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
      {YoutubeData.map((item, index) => {
        let newClass = '';
        if (index === 1) newClass = "abc";
        // const newClass = index == 1 ? "abc" : "";
        
        return (
          <YoutubeItem
            className={newClass}
            key={item.id}
            image={item.image}
            title={item.title || "This is example of title"}
            channel={item.channel || "This is example of channel name"}
            avatar={item.avatar || item.image}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

// Props -> properties
function YoutubeItem(props) {
  return (
    <div className={`youtube-item ${props.className}`}>
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
          src={props.avatar}
          alt=""
          className="youtube-avatar"
        />
        <div className="youtube-infor">
          <h3 className="youtube-title">
            {props.title}
          </h3>
          <h4 className="youtube-channel">
            {props.channel}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
