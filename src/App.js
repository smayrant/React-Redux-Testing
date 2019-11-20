import React from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import "./app.scss";

const tempArr = [
	{
		fName: "Joe",
		lName: "Johnson",
		age: 30,
		email: "joej@gmail.com",
		availableOnline: true
	}
];

function App () {
	return (
		<div className="App">
			<Header />
			<section className="main">
				<Headline header={"Posts"} desc={"Click the button to render posts!"} tempArr={tempArr} />
			</section>
		</div>
	);
}

export default App;
