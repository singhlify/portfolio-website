import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { Footer } from "./FooterSection.style";

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
		<Footer>
			<div className="socialIcons">
				<a href="https://github.com/Blink98" target="_blank">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://www.linkedin.com/in/gsingh5k/" target="_blank">
					<i className="fab fa-linkedin"></i>
				</a>
				<a href="https://twitter.com/gsingh5k" target="_blank">
					<i className="fab fa-twitter"></i>
				</a>

				<i onClick={copyEmail} className="fas fa-envelope"></i>

				<a href="https://dribbble.com/blink99" target="_blank">
					<i className="fab fa-dribbble"></i>
				</a>
			</div>
			<p>Made with ❤️</p>

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
