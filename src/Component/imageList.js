import React from "react";
import ImageCard from "./imageCard";
import "./imgList.css";

const imageList = props => {
	// console.log(props.images);
	const { images } = props;
	const img = images.map(image => <ImageCard key={image.id} image={image} />);
	// console.log(img)
	return <div className="mt-3 img-list">{img}</div>;
};
export default imageList;
