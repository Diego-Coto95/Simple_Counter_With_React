//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
// import { Home } from "./component/home.js";

function SimpleCounter(props) {
	return (
		<div className="container">
			<div className="d-flex bd-highlight" id="content">
				<div
					className="p-2 flex-fill bd-highlight bg-dark text-light"
					id="words">
					<i className="far fa-clock" />
				</div>
				<div
					className="p-2 flex-fill bd-highlight bg-dark text-light"
					id="words">
					{props.digitSix % 10}
				</div>
				<div
					className="p-2 flex-fill bd-highlight bg-dark text-light"
					id="words">
					{props.digitFive % 10}
				</div>
				<div
					className="p-2 flex-fill bd-highlight bg-dark text-light"
					id="words">
					{props.digitFour % 10}
				</div>
				<div
					className="p-2 flex-fill bd-highlight bg-dark text-light"
					id="words">
					{props.digitThree % 10}
				</div>
				<div
					className="p-2 flex-fill bd-highlight bg-dark text-light"
					id="words">
					{props.digitTwo % 10}
				</div>
				<div
					className="p-2 flex-fill bd-highlight bg-dark text-light"
					id="words">
					{props.digitOne % 10}
				</div>
			</div>
		</div>
	);
}
let counter = 0;

SimpleCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};

setInterval(() => {
	const Six = Math.floor(counter / 100000);
	const Five = Math.floor(counter / 10000);
	const Four = Math.floor(counter / 1000);
	const Three = Math.floor(counter / 100);
	const Two = Math.floor(counter / 10);
	const One = Math.floor(counter / 1);
	counter++;

	//render your react application
	ReactDOM.render(
		<SimpleCounter
			digitOne={One}
			digitTwo={Two}
			digitThree={Three}
			digitFour={Four}
			digitFive={Five}
			digitSix={Six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
