import React from "react";
import Link from "next/link";
import { Wrapper, NavDesk, NavCheckBox, MenuBtn, NavMob } from "./Navbar.style";

const Navbar = () => {
	return (
		<>
			<Wrapper>
				<NavDesk>
					<div className="nav__links">
						<Link href="#projects">Work</Link>
						<Link href="#blogs">Blogs</Link>
						<Link href="#contact">Contact</Link>
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
						<Link href="#projects">Works</Link>
					</li>
					<li>
						<Link href="#blogs">Blogs</Link>
					</li>
					<li>
						<Link href="#contact">Contact</Link>
					</li>
				</ul>
			</NavMob>
		</>
	);
};

export default Navbar;
