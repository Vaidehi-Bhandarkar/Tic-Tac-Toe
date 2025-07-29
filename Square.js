import { useState } from "react";

const Square = ({ val, onSquareClick }) => {
	// const [value, setValue] = useState(null);

	// const handleClick = () => {
	// 	// setValue("X");
	// };

	return (
		<button
			className="border-1 p-2 cursor-pointer"
			onClick={onSquareClick}>
			{val}
		</button>
	);
};

export default Square;
