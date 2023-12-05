import React from "react";
import "./styles.css";
import EmptyGIF from "../../../assets/images/13525-empty.gif";
const EmptyList = () => (
	<div className="emptyList-wrap">
		<img src={EmptyGIF} alt="empty" />
	</div>
);

export default EmptyList;
