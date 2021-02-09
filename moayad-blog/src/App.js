import './App.css';

function App() {
  const title = "Welcome to the New Blog";
  const likes = 50;
  const link = "https://reactjs.org";
  // const person = {name: "Eyad", age: 1};
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{23}</p>
        <p>{"Moayad"}</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>React JS</a>
      </div>
    </div>
  );
}

export default App;
