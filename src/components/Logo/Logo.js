import React from "react";
import Tilt from "react-parallax-tilt";
import face from "./face.png";
import "./Logo.css";

const Logo = () => {
	return (
		<div className="ma4 mt0" style={{ marginTop: "-100px" }}>
			<p>
				<Tilt
					className="Tilt br2 shadow-2"
					options={{ max: 55 }}
					style={{ height: 125, width: 125 }}
				>
					<div className="Tilt-inner pa3">
						<img style={{ paddingTop: "5px" }} src={face} alt="logo" />
					</div>
				</Tilt>
			</p>
		</div>
	);
};

export default Logo;
