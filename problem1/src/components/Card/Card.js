import React, { useState } from "react";
import "./Card.css";
function Card({ text, id }) {
	const [isBold, setBold] = useState(false);
	const [isItalic, setItalic] = useState(false);
	const [isUnderline, setUnderline] = useState(false);
	const [fontSize, setFontSize] = useState(20);
	const [color, setColor] = useState("#000000");

	const textId = "text_" + id;

	const handleBold = (e) => {
		setBold(!isBold);
		if (isBold) {
			document.getElementById(textId).style.fontWeight = "normal";
		} else {
			document.getElementById(textId).style.fontWeight = "bold";
		}
	};

	const handleItalic = (e) => {
		setItalic(!isItalic);
		if (isItalic) {
			document.getElementById(textId).style.fontStyle = "normal";
		} else {
			document.getElementById(textId).style.fontStyle = "italic";
		}
	};
	const handleUnderline = (e) => {
		setUnderline(!isUnderline);
		if (isUnderline) {
			document.getElementById(textId).style.textDecoration = "none";
		} else {
			document.getElementById(textId).style.textDecoration = "underline";
		}
	};
	const handleSize = (e) => {
		setFontSize(e.target.value);
		document.getElementById(textId).style.fontSize = fontSize;
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
					onKeyUp={handleSize}
				/>
				<input className="card-input-color" type="color" name="color" id="" />
			</div>
			<div className="text-card" id={textId}>
				{text}
			</div>
		</div>
	);
}

export default Card;
