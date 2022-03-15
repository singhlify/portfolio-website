// https://brianlovin.com/writing/adding-dark-mode-with-next-js
// https://codesandbox.io/s/mzj64x80ny?file=/src/styles.scss
// https://www.joshwcomeau.com/react/dark-mode/

import { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "./globals";

const Theme = ({ children }) => {
	const { value } = useDarkMode(true);
	const theme = value ? darkTheme : lightTheme;
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const body = (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);

	// prevents ssr flash for mismatched dark mode
	if (!mounted) {
		return <div style={{ visibility: "hidden" }}>{body}</div>;
	}

	return body;
};

export default Theme;
