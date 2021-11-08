import styled from "styled-components";
import Button from "@mui/material/Button";

export const Section = styled.section`
	${"" /* margin: 3.7rem auto 5.8rem; */}
	margin: 2rem auto 5.8rem;
	padding: clamp(1.8rem, 2.5vw, 3rem);

	.buttonContainer {
		display: flex;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin: 19.4rem auto 7.1rem;
		margin: 7.1rem auto;
		${"" /* max-width: 86.3rem; */}
		max-width: 90rem;
		display: grid;
		grid-template-columns: auto auto;

		br:nth-child(2) {
			display: none;
		}
	}
`;

export const CustomButton = styled(Button)`
	font-size: 2rem !important;
	font-weight: 500 !important;
	text-transform: capitalize !important;
	color: ${(props) => props.theme.colors.white} !important;
	margin: auto !important;
	padding: 1rem 2rem !important;
	border-radius: 0.2rem !important;
	background: ${(props) => props.theme.colors.primary} !important;

	&:hover {
		background: ${(props) => props.theme.colors.primary} !important;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin: unset !important;
	}
`;

export const IntroImg = styled.div`
	${"" /* max-width: 16.6rem; */}
	max-width: 20rem;
	margin: 0 auto 3.6rem;

	@media ${(props) => props.theme.breakpoints.md} {
		${"" /* max-width: 26rem; */}
		max-width: 31rem;
		margin: 0 0 0 auto;
	}
`;

export const IntroText = styled.div`
	h1 {
		font-size: 3.2rem;
		font-weight: 600;
		max-width: 31rem;
		line-height: 4rem;

		text-align: center;
		margin: auto;
	}

	p {
		font-weight: normal;
		max-width: 32.8rem;

		margin: 2.1rem auto 2.7rem;

		line-height: 2.3rem;
		text-align: center;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		order: -1;

		h1,
		p {
			text-align: left;
			margin: unset;
			max-width: 49.7rem;
		}

		h1 {
			font-weight: bold;
			font-size: 4.4rem;
			line-height: 6rem;
		}

		p {
			margin: 4rem 0;
		}
	}
`;
