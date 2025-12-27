import { useReducer, useState } from "react";
import "./App.css";

function Header({ name}) {
	return (
		<>
			<h1>{name}'s kitchen</h1>
			<div>Hello this is Eve's kitchen</div>
		</>
	);
}

const items = ["Pizze", "Burger", "Salad"];

const dishObjects = items.map((dish, i) => ({ id: i, title: dish }));
//console.log(dishObjects);

function Main({ dishes, openStatus, onStatus }) {
	return (
		<div>
			<button onClick={()=> onStatus(!openStatus)}> I want to be {status ? "open" : "closed"} </button>
			<div>Welcome to the restaurent {openStatus ? "is open" : "is closed"} </div>
			
			<ul>
				{dishes.map((dish, i) => (
					<li key={dish.id} style={{ listStyleType: "none" }}>
						{dish.title}
					</li>
				))}
			</ul>
		</div>
	);
}

function App() {
	//const [status, setStatus] = useState(true);
	const [status, toggle] = useReducer(
		(status) => !status,
		true
	)
	return (
		<>
			<h1>The restaurant is currently {status ? "open" : "closed"}</h1>
			<button onClick={toggle}>
				{status ? "close" : "open"} Restaurant
			</button>
		
			<Header name={"Eve"} />
			<Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
		</>
	);
}

export default App;
