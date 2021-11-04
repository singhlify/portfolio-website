import styled from "styled-components";

export const NavContainer = styled.div`
	font-size: 1.6rem;
	padding: 2rem 1rem;

	position: sticky;
	top: 0;
`;

export const NavLogo = styled.div`
	font-family: inherit;
	${"" /* font-size: 2.4rem; */}
	font-size: clamp(2.4rem, 3vw, 4rem);
	${"" /* font-size: clamp(1.5rem, 2.5vw, 2.5rem); */}
`;

export const NavDeskLinks = styled.div``;

export const NavMobLinks = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	${
		"" /* background: linear-gradient(-135deg, #c850c0, #4158d0);
	background: linear-gradient(-135deg, #ff6464, #ff6464); */
	}
	background: #ff6464;
	clip-path: circle(25px at calc(100% - 35px) 35px);
	transition: all 0.3s ease-in-out;

	ul {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		list-style: none;
		text-align: center;
		width: fit-content;

		li {
			margin: 15px 0;

			a {
				color: none;
				text-decoration: none;
				font-size: 30px;
				font-weight: 500;
				padding: 5px 30px;
				color: #fff;
				position: relative;
				line-height: 50px;
				transition: all 0.3s ease;

				&:after {
					position: absolute;
					content: "";
					background: #fff;
					width: 100%;
					height: 50px;
					left: 0;
					border-radius: 50px;
					transform: scaleY(0);
					z-index: -1;
					transition: transform 0.3s ease;
				}

				&:hover:after {
					transform: scaleY(1);
				}

				&:hover {
					${"" /* color: #4158d0; */}
					color: #142850;
				}
			}
		}
	}
`;

export const MenuBtn = styled.label`
	position: absolute;
	z-index: 2;
	right: 1rem;
	top: 1rem;
	height: 50px;
	width: 50px;
	text-align: center;
	line-height: 50px;
	border-radius: 50%;
	font-size: 20px;
	color: #fff;
	cursor: pointer;
	${"" /* background: linear-gradient(-135deg, #c850c0, #4158d0); */}
	background: #ff6464;
	transition: all 0.3s ease-in-out;
`;

export const NavCheckBox = styled.input.attrs((props) => {
	type: "checkbox";
})`
	display: none;

	&:checked ~ ${NavMobLinks} {
		clip-path: circle(75%);
	}

	&:checked ~ ${MenuBtn} {
		background: #fff;
		${"" /* color: #4158d0; */}
		color: #142850;

		i:before {
			content: "\f00d";
		}
	}
`;
