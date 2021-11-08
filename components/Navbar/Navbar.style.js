import styled from "styled-components";

export const NavContainer = styled.div`
	font-size: 1.6rem;
	padding: 2rem 1rem;

	position: sticky;
	top: 0;
`;

export const NavLogo = styled.div`
	font-family: inherit;
	font-size: clamp(2.4rem, 3vw, 4rem);
`;

export const NavDeskLinks = styled.div``;

export const NavMobLinks = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: ${(props) => props.theme.colors.primary};
	clip-path: circle(2.4rem at calc(100% - 3.5rem) 3.5rem);
	transition: all 0.3s ease-in-out;
	z-index: 1;

	ul {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		list-style: none;
		text-align: center;
		width: fit-content;

		li {
			margin: 1.5rem 0;

			a {
				text-decoration: none;
				font-size: 3rem;
				font-weight: 500;
				padding: 0.5rem 3rem;
				position: relative;
				line-height: 5rem;
				transition: all 0.3s ease;
				color: ${(props) => props.theme.colors.white};

				&:after {
					position: absolute;
					content: "";
					background: ${(props) => props.theme.colors.white};
					width: 100%;
					height: 5rem;
					left: 0;
					border-radius: 5rem;
					transform: scaleY(0);
					z-index: -1;
					transition: transform 0.3s ease;
				}

				&:hover:after {
					transform: scaleY(1);
				}

				&:hover {
					color: ${(props) => props.theme.colors.dark};
				}
			}
		}
	}
`;

export const MenuBtn = styled.label`
	z-index: 2;
	right: 1rem;
	top: 1rem;
	height: 5rem;
	width: 5rem;
	text-align: center;
	line-height: 5rem;
	border-radius: 50%;
	font-size: 2rem;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	position: sticky;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;

	background: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.black};
`;

export const NavCheckBox = styled.input.attrs((props) => {
	type: "checkbox";
})`
	display: none;

	&:checked ~ ${NavMobLinks} {
		clip-path: circle(75%);
	}

	&:checked ~ ${MenuBtn} {
		background: ${(props) => props.theme.colors.white};
		color: ${(props) => props.theme.colors.dark};

		i:before {
			content: "\f00d";
		}
	}
`;
