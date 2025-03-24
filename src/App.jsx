function Feature() {
  return (
    <div className="feature">
      <img
        src="https://picsum.photos/200/300"
        alt="random"
        className="feature-image"
      />
      <h3>Title2</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quibusdam, voluptatem, nemo, quia quae quod odio laborum voluptas
        doloremque nesciunt sequi. Nihil, doloremque. Quisquam quibus
        voluptatem, voluptates quas quidem.
      </p>
    </div>
  );
}

// parent component
const App = () => {
  return (
    <div>
      {/* children components  */}
      <YoutubeItem
        image="https://picsum.photos/200/300"
        title="Learning React"
        channel="Codevolution"
      ></YoutubeItem>
      <YoutubeItem
        image="https://picsum.photos/200/200"
        title="Learning Angular"
        channel="Anh Dung"
      ></YoutubeItem>
    </div>
  );
};

// Props -> properties

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="random" />
      </div>
      <div className="youtube-footer">
        <div className="youtube-avatar">
          <div className="youtube-infor">
            <h3 className="youtube-title">{props.title}</h3>
            <h4 className="youtube-channel">{props.channel}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
