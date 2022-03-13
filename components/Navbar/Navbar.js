import React from "react";
import { Wrapper, NavDesk, NavCheckBox, MenuBtn, NavMob } from "./Navbar.style";

const Navbar = () => {
	return (
		<>
			<Wrapper>
				<NavDesk>
					<div className="nav__links">
						<a href="">Works</a>
						<a href="">Blogs</a>
						<a href="">Contact</a>
					</div>
				</NavDesk>
			</Wrapper>

			<NavCheckBox type="checkbox" id="active" />

			<MenuBtn htmlFor="active">
				<i className="fas fa-bars"></i>
			</MenuBtn>

			<NavMob>
				<ul>
					<li>
						<a href="#">Works</a>
					</li>
					<li>
						<a href="#">Blogs</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</NavMob>
		</>
	);
};

export default Navbar;
