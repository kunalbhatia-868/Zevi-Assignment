import React, { useState } from "react";
import "./Card.css";

function Card({ text, id }) {
	const [isBold, setBold] = useState(false);
	const [isItalic, setItalic] = useState(false);
	const [isUnderline, setUnderline] = useState(false);

	const textId = "text_" + id;

	const handleBold = () => {
		setBold(!isBold);
		if (isBold) {
			document.getElementById(textId).style.fontWeight = "normal";
		} else {
			document.getElementById(textId).style.fontWeight = "bold";
		}
	};

	const handleItalic = () => {
		setItalic(!isItalic);
		if (isItalic) {
			document.getElementById(textId).style.fontStyle = "normal";
		} else {
			document.getElementById(textId).style.fontStyle = "italic";
		}
	};

	const handleUnderline = () => {
		setUnderline(!isUnderline);
		if (isUnderline) {
			document.getElementById(textId).style.textDecoration = "none";
		} else {
			document.getElementById(textId).style.textDecoration = "underline";
		}
	};

	const handleSize = (e) => {
		document.getElementById(textId).style.fontSize = `${e.target.value}px`;
	};

	const handleColor = (e) => {
		document.getElementById(textId).style.color = e.target.value;
	};

	return (
		<div className="cards-row">
			<div className="button-card">
				<button className="card-button" onClick={handleBold}>
					{!isBold ? "Bold" : "Normal"}
				</button>
				<button className="card-button" onClick={handleItalic}>
					{!isItalic ? "Italic" : "Normal"}
				</button>
				<button className="card-button" onClick={handleUnderline}>
					{!isUnderline ? "Underline" : "Normal"}
				</button>
				<input
					className="card-input-number"
					type="number"
					name="number"
					id=""
					onChange={handleSize}
					max={40}
					min={0}
				/>
				<input
					className="card-input-color"
					type="color"
					name="color"
					id=""
					onChange={handleColor}
				/>
			</div>
			<div className="text-card" id={textId}>
				{text}
			</div>
		</div>
	);
}

export default Card;
