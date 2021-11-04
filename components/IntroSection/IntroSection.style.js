import styled from "styled-components";
import Button from "@mui/material/Button";

export const Section = styled.section`
	.buttonContainer {
		display: flex;
	}
`;

export const CustomButton = styled(Button)`
	font-size: 2rem;
	font-weight: 500;
	text-transform: capitalize;
	color: #ffffff;
	margin: auto;
	padding: 1rem 2rem;
	border-radius: 2px;
	background: #ff6464;

	&:hover {
		background: #ff6464;
	}
`;

export const IntroImg = styled.div`
	max-width: 16.6rem;
	margin: 3.6rem auto;
`;

export const IntroText = styled.div`
	h1 {
		font-size: 3.2rem;
		font-weight: 600;
		width: 31rem;
		line-height: 40px;

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
`;
