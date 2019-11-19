import React from "react";
import "./styles.scss";
import logo from "../../assets/checklist.png";

const Header = () => {
	return (
		<header data-test="headerComponent">
			<div className="wrap">
				<div className="logo">
					<img data-test="logoIMG" src={logo} alt="Logo" />
				</div>
			</div>
		</header>
	);
};

export default Header;
