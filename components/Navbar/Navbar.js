import useDarkMode from "use-dark-mode";
import Link from "next/link";
import {
	Wrapper,
	NavDesk,
	NavCheckBox,
	MenuBtn,
	NavMob,
	Switch,
} from "./Navbar.style";

const Navbar = () => {
	const { value, toggle } = useDarkMode(true);

	return (
		<>
			<Wrapper>
				<NavDesk>
					<Switch
						checked={value}
						onChange={toggle}
						inputProps={{ "aria-label": "controlled" }}
					/>
					<div className="nav__links">
						<Link href="#blogs">Blogs</Link>
						<Link href="#projects">Projects</Link>
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
						<Link href="#blogs">Blogs</Link>
					</li>
					<li>
						<Link href="#projects">Projects</Link>
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
