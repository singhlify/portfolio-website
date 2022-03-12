import styled from "styled-components";

export const Wrapper = styled.div`
	background: ${(props) => props.theme.colors.blue};
	margin: 5.8rem 0;
`;

export const Section = styled.section`
	margin: 2rem auto 5.8rem;
	padding: 0 clamp(1.8rem, 2.5vw, 3rem) 3.8rem;
	max-width: 38rem;

	h2 {
		color: ${(props) => props.theme.colors.dark};
		font-weight: normal;
		font-size: 1.8rem;
		line-height: 6rem;
		text-align: center;
		padding: 2.2rem 0;

		display: flex;
		justify-content: space-between;
		align-items: center;

		a {
			font-weight: 400;
			font-size: 1.6rem;
			line-height: 2.4rem;
			text-align: right;

			color: ${(props) => props.theme.colors.secondary};
		}
	}

	.cards {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		gap: 1.7rem;
	}

	.card {
		font-size: 1.6rem !important;
		border-radius: 0.4rem;

		.card__content {
			padding: 1.2rem 1.9rem 2.2rem;

			.card__title {
				font-weight: 700;
				font-size: 2.2rem;
				line-height: 3rem;
			}

			.card__tags {
				font-weight: 400;
				font-size: 1.6rem;
				line-height: 2.4rem;
				margin: 1.2rem 0 1.9rem;
			}

			.card__desc {
				font-weight: 400;
				font-size: 1.6rem;
				line-height: 2.4rem;
			}
		}
	}

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 90rem;

		h2 {
			text-align: left;
			font-size: 2.2rem;
		}

		.cards {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: 1fr;
		}
	}
`;
