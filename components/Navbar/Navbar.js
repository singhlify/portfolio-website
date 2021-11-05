import React from "react";
import {
	NavCheckBox,
	MenuBtn,
	NavContainer,
	NavLogo,
	NavDeskLinks,
	NavMobLinks,
} from "./Navbar.style";

const Navbar = () => {
	return (
		<>
			{/* <NavContainer>
				<NavLogo>Gurjot Singh</NavLogo>

				<NavDeskLinks></NavDeskLinks>
			</NavContainer> */}

			<div style={{ height: "5rem" }}></div>

			{/* <NavCheckBox type="checkbox" id="active" /> */}

			{/* <MenuBtn htmlFor="active">
				<i className="fas fa-bars"></i>
			</MenuBtn> */}

			{/* <NavMobLinks>
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
			</NavMobLinks> */}
		</>
	);
};

export default Navbar;
