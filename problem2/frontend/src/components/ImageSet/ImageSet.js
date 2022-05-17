import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "../ImageSet/ImageSet.css";
function ImageSet() {
	return (
		<div className="image-set">
			<ImageCard />
			<ImageCard />
			<ImageCard />
			<ImageCard />
			<ImageCard />
			<ImageCard />
		</div>
	);
}

export default ImageSet;
