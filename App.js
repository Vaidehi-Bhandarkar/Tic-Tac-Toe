import ReactDOM from "react-dom/client";
import Board from "./Board";

const App = () => {
	return (
		<div>
			<Board />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
