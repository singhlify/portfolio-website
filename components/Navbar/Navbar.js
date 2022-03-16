import useDarkMode from "use-dark-mode";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import { Wrapper, NavDesk, NavCheckBox, MenuBtn, NavMob } from "./Navbar.style";
import { useTheme } from "next-themes";

const Navbar = () => {
	// const { value, toggle } = useDarkMode(true);
	const { theme, setTheme } = useTheme();

	return (
		<>
			<Wrapper>
				<NavDesk>
					<div className="nav__links">
						<Switch
							checked={value}
							// onChange={toggle}
							onClick={() => setTheme("light")}
							inputProps={{ "aria-label": "controlled" }}
						/>
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
