import styled from "styled-components";

export const AdminHeading = styled.h1`
	font-size: clamp(1.3rem, 2.5vw, 3rem);
	color: #5a6270;
	@media ${(props) => props.theme.breakpoints.xl} {
		width: 100%;
	}
`;

export const NavLinks = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: linear-gradient(-135deg, #c850c0, #4158d0);
	clip-path: circle(25px at calc(100% - 45px) 45px);
	transition: all 0.3s ease-in-out;

	ul {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		list-style: none;
		text-align: center;

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
					color: #4158d0;
				}
			}
		}
	}
`;

export const MenuBtn = styled.label`
	position: absolute;
	z-index: 2;
	right: 20px;
	top: 20px;
	height: 50px;
	width: 50px;
	text-align: center;
	line-height: 50px;
	border-radius: 50%;
	font-size: 20px;
	color: #fff;
	cursor: pointer;
	background: linear-gradient(-135deg, #c850c0, #4158d0);
	transition: all 0.3s ease-in-out;
`;

export const NavCheckBox = styled.input.attrs((props) => {
	type: "checkbox";
})`
	display: none;

	&:checked ~ ${NavLinks} {
		clip-path: circle(75%);
	}

	&:checked ~ ${MenuBtn} {
		background: #fff;
		color: #4158d0;

		i:before {
			content: "\f00d";
		}
	}
`;
