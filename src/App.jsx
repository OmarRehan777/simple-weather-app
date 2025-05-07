import { useState } from "react";
import MainWindow from "./MainWindow/MainWindow";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="app-div">
			<MainWindow></MainWindow>
		</div>
	);
}

export default App;
