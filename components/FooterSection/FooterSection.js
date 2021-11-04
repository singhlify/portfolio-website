import React from "react";
import { Footer } from "./FooterSection.style";

const FooterSection = () => {
	return (
		<Footer>
			<div className="socialIcons">
				<i class="fab fa-github"></i>
				<i class="fab fa-linkedin"></i>
				<i class="fab fa-twitter"></i>
				<i class="fab fa-dribbble"></i>
			</div>
			<p>Made with ❤️</p>
		</Footer>
	);
};

export default FooterSection;
