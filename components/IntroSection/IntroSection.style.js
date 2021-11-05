import styled from "styled-components";
import Button from "@mui/material/Button";

export const Section = styled.section`
	${"" /* padding: 0 1rem; */}
	margin: 3.7rem 1rem 5.8rem;

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
	border-radius: 0.2rem;
	background: #ff6464;
	${"" /* z-index: 0; */}

	&:hover {
		background: #ff6464;
	}
`;

export const IntroImg = styled.div`
	max-width: 16.6rem;
	${"" /* margin: 3.6rem auto; */}
	margin: 0 auto 3.6rem;

	img {
		${"" /* z-index: -1; */}
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
`;
