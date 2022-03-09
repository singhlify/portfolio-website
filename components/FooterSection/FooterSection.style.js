import styled from "styled-components";
import { withStyles } from "@mui/styles";
import { Tooltip as muiTooltip } from "@mui/material";

export const Footer = styled.footer`
	padding: 5.3rem 1rem;

	.socialIcons {
		display: flex;
		margin: auto;
		justify-content: space-between;
		align-items: center;
		max-width: 23.2rem;
		max-width: 25rem;
		font-size: 3rem;

		i {
			transition: all 0.3s ease-in-out;

			&:hover {
				color: ${(props) => props.theme.colors.primary};
				transform: scale(1.2);
				cursor: pointer;
			}
		}
	}

	p {
		font-weight: normal;
		font-size: 1.4rem;
		line-height: 2.1rem;
		text-align: center;
		margin-top: 2.6rem;
	}

	.snackbar__alert {
		font-weight: 500;
		font-size: 1.4rem;
		line-height: 1.43;
		letter-spacing: 0.01071em;
	}
`;

export const Tooltip = withStyles({
	tooltip: {
		fontSize: "1.4rem",
	},
})(muiTooltip);
