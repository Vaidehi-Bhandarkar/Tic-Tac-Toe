import Square from "./Square";
import { useState } from "react";

const Board = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xNext, setXNext] = useState(true);

	const handleClick = (i) => {
		//To restrict from taking same action twice in same box/square
		if (squares[i] || calculateWinner(squares)) return;

		const next = squares.slice();

		if (xNext) {
			next[i] = "X";
		} else {
			next[i] = "O";
		}

		setSquares(next);
		setXNext(!xNext);

		const winner = calculateWinner(next);
		if (!winner && next.every((square) => square !== null)) {
			// game is draw, reset the game
			setTimeout(() => {
				alert("It's a draw! Restarting game...");
				setSquares(Array(9).fill(null));
				setXNext(true);
			}, 500);
		}
	};

	const calculateWinner = (squares) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			let [a, b, c] = lines[i];

			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
				return squares[a];
		}
		return null;
	};

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next Player: " + (xNext ? "X" : "O");
	}

	return (
		<div className="m-10">
			<div className="mb-5 font-semibold"> {status} </div>
			<div className="grid grid-cols-3 w-30 h-10">
				<Square
					val={squares[0]}
					onSquareClick={() => {
						handleClick(0);
					}}
				/>
				<Square
					val={squares[1]}
					onSquareClick={() => {
						handleClick(1);
					}}
				/>
				<Square
					val={squares[2]}
					onSquareClick={() => {
						handleClick(2);
					}}
				/>
			</div>
			<div className="grid grid-cols-3 w-30  h-10">
				<Square
					val={squares[3]}
					onSquareClick={() => {
						handleClick(3);
					}}
				/>
				<Square
					val={squares[4]}
					onSquareClick={() => {
						handleClick(4);
					}}
				/>
				<Square
					val={squares[5]}
					onSquareClick={() => {
						handleClick(5);
					}}
				/>
			</div>
			<div className="grid grid-cols-3 w-30  h-10">
				<Square
					val={squares[6]}
					onSquareClick={() => {
						handleClick(6);
					}}
				/>
				<Square
					val={squares[7]}
					onSquareClick={() => {
						handleClick(7);
					}}
				/>
				<Square
					val={squares[8]}
					onSquareClick={() => {
						handleClick(8);
					}}
				/>
			</div>
		</div>
	);
};

export default Board;
