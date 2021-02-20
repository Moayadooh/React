// function Event(){
//     return (  );
// }
const Event = () => {
    // const handleClick = () => {
    //     console.log("Eyad");
    // }
    function handleClick() {
        console.log("Eyad");
    }

    function handleClickAgain(name, e) {
        console.log(name, e.target);
    }
    return (
        <div className="event">
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain("Moayad", e)}>Click me again</button>
        </div>
      );
}

export default Event;