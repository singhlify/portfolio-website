import styled from "styled-components";
import Button from "@mui/material/Button";

export const Section = styled.section`
	${"" /* margin: 3.7rem auto 5.8rem; */}
	margin: 2rem auto 5.8rem;
	padding: 0 clamp(1.8rem, 2.5vw, 3rem);
	max-width: 38rem;
	${"" /* margin: auto; */}

	h2 {
		text-align: center;
		font-weight: normal;
		font-size: 1.8rem;
		line-height: 6rem;
	}

	.card {
		font-size: 1.6rem !important;
		padding: 0 0 1.7rem;
		border-radius: 0;
		border-bottom: 0.1rem solid #e0e0e0;

		&:hover {
			cursor: pointer;
		}

		.card__content {
			padding: 0;

			.card__media {
				border-radius: 0.6rem;
				margin-bottom: 1.7rem;
				height: 23rem;
			}

			.card__details {
				.card__title {
					font-weight: bold;
					font-size: 2.4rem;
					line-height: 3rem;
				}

				.card__tags {
					margin: 1.6rem 0 2.4rem;

					.card__chip {
						background: ${(props) => props.theme.colors.dark2};
						color: ${(props) => props.theme.colors.white};
						border-radius: 1.6rem;
						font-weight: 900;
						font-size: 1.6rem;
						line-height: 6rem;
					}
				}

				.card__desc {
					font-weight: normal;
					font-size: 1.6rem;
					line-height: 2.3rem;
				}
			}
		}
	}

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 90rem;

		h2 {
			text-align: left;
			font-size: 2.2rem;
			margin-bottom: 2.2rem;
		}

		.card {
			.card__content {
				display: grid;
				grid-template-columns: auto auto;
				column-gap: 1.8rem;
				margin: 0 auto;
				padding: 0;
				${"" /* margin: 19.4rem auto 7.1rem; */}
				${"" /* margin: 7.1rem auto; */}

				.card__media {
					margin: 0;
					height: 18rem;
				}

				.card__details {
					.card__title {
						font-size: 30px;
						line-height: 44px;
					}
				}
			}
		}
	}
`;
