import "./App.css";
import Card from "./components/Card/Card";

function App() {
	return (
		<div className="App">
			<div className="main card-rows">
				<Card text="He's not the sharpest knife in the drawer." id="1" />
				<Card text="The big building was blazing with lights." id="2" />
				<Card text="Now you must answer some big questions." id="3" />
				<Card text="Get Your Act Together" id="4" />
			</div>
		</div>
	);
}

export default App;
