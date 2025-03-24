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

const App = () => {
  return (
    <div>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </div>
  );
};

export default App;
