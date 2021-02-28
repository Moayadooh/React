// function Props(props)
function Props({name, age}) {
    return(
        <div className="prop">
            {/* <h1>Name is {props.name} and age is {props.age}</h1> */}
            <h1>Name is {name} and age is {age}</h1>
        </div>
    );
}

export default Props;