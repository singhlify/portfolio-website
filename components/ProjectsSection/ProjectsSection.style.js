import styled from "styled-components";
import Button from "@mui/material/Button";

export const Section = styled.section`
	${"" /* margin: 3.7rem auto 5.8rem; */}
	margin: 2rem auto 5.8rem;
	padding: clamp(1rem, 2.5vw, 3rem);

	@media ${(props) => props.theme.breakpoints.md} {
		${
			"" /* margin: 19.4rem auto 7.1rem;
		margin: 7.1rem auto;
		max-width: 90rem;
		display: grid;
		grid-template-columns: auto auto; */
		}
	}
`;
