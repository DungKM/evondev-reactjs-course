
const App = () => {
  const name = "React";
  function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  // return (
  //   <div className="App">
  //     <h1> Hello {name == "React" ? "Dung" : "Lan"}</h1>
  //     <h2>{formatName("Hoang Anh", "Dung")}</h2>
  //   </div>
  // );
  return (
    <div className="feature">
      <img
        src="https://picsum.photos/200/300"
        alt="random"
        className="feature-image"
      />
      <h3>Hello World</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quibusdam, voluptatem, nemo, quia quae quod odio laborum voluptas
        doloremque nesciunt sequi. Nihil, doloremque. Quisquam quibus
        voluptatem, voluptates quas quidem.
      </p>
    </div>
  );
};

export default App;
