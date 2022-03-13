import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { Footer, Tooltip } from "./FooterSection.style";

const FooterSection = () => {
	const [open, setOpen] = useState(false);
	const vertical = "bottom";
	const horizontal = "center";

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	const copyEmail = () => {
		navigator.clipboard.writeText("gs130899@gmail.com");
		handleClick();
	};

	return (
		<Footer id="contact">
			<div className="socialIcons">
				<a href="https://github.com/singhlify" target="_blank" rel="noreferrer">
					<i className="fab fa-github"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/singhlify/"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-linkedin"></i>
				</a>
				<a
					href="https://twitter.com/singhlify"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-twitter"></i>
				</a>

				<Tooltip title="Click to Copy" placement="top">
					<i onClick={copyEmail} className="fas fa-envelope"></i>
				</Tooltip>

				<a
					href="https://dribbble.com/Singhlify"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fab fa-dribbble"></i>
				</a>
			</div>
			<p>Handcrafted with ❤️</p>

			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				key={vertical + horizontal}
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
			>
				<Alert
					className="snackbar__alert"
					onClose={handleClose}
					severity="success"
					sx={{ width: "100%" }}
				>
					Email copied to clipboard
				</Alert>
			</Snackbar>
		</Footer>
	);
};

export default FooterSection;
