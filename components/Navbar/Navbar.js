import React from "react";
import { NavLinks, NavCheckBox, MenuBtn } from "./Navbar.style";

const Navbar = () => {
	return (
		<>
			{/* <input type="checkbox" id="active" /> */}
			<NavCheckBox type="checkbox" id="active" />
			{/* <label htmlFor="active" className="menu-btn">
				<i className="fas fa-bars"></i>
			</label> */}

			<MenuBtn htmlFor="active">
				<i className="fas fa-bars"></i>
			</MenuBtn>
			{/* <div className="wrapper"> */}

			<NavLinks>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Gallery</a>
					</li>
					<li>
						<a href="#">Feedback</a>
					</li>
				</ul>
			</NavLinks>
			{/* </div> */}
		</>
	);
};

export default Navbar;
