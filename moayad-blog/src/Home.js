const Home = () => {
    function handleClick() {
        console.log("Eyad");
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click</button>
        </div>
      );
}

export default Home;