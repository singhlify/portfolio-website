import styled from "styled-components";

export const Footer = styled.footer`
	padding: 5.3rem 1rem;

	.socialIcons {
		display: flex;
		margin: auto;
		justify-content: space-between;
		max-width: 23.2rem;
		font-size: 3rem;
		color: #21243d;

		i {
			transition: all 0.3s ease-in-out;

			&:hover {
				color: #ff6464;
				transform: scale(1.1);
				cursor: pointer;
			}
		}
	}

	p {
		color: #21243d;
		font-weight: normal;
		font-size: 1.4rem;
		line-height: 2.1rem;
		text-align: center;
		margin-top: 2.6rem;
	}
`;
