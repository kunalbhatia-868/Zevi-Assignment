import React from "react";
import "./ImageCard.css";

function ImageCard({singleImageData}) {
	const img_url=singleImageData['url_s'];
	return (
		<div className="image">
			<img
				src={img_url}
				alt=""
				width={300}
				height={400}
			/>
		</div>
	);
}

export default ImageCard;
