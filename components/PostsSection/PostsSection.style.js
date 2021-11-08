import styled from "styled-components";

export const Section = styled.section`
	background: ${(props) => props.theme.colors.blue};
	margin: 5.8rem 0;

	h2 {
		color: ${(props) => props.theme.colors.dark};
		font-weight: normal;
		font-size: 1.8rem;
		line-height: 6rem;
		text-align: center;
	}
`;
