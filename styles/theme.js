// https://brianlovin.com/writing/adding-dark-mode-with-next-js
// https://codesandbox.io/s/mzj64x80ny?file=/src/styles.scss

import { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "./globals";

const Theme = ({ children }) => {
	const { value } = useDarkMode(true);
	const theme = value ? darkTheme : lightTheme;

	// useEffect(() => {
	// 	console.log("value>>>", value);
	// }, [value]);

	// const [mounted, setMounted] = useState(false);

	// useEffect(() => {
	// 	let cancel = true;

	// 	if (cancel) {
	// 		setMounted(true);
	// 	}

	// 	return () => {
	// 		cancel = false;
	// 	};
	// }, []);

	// const body = (
	// 	<ThemeProvider theme={theme}>
	// 		<GlobalStyles />
	// 		{children}
	// 	</ThemeProvider>
	// );

	// prevents ssr flash for mismatched dark mode
	// if (!mounted) {
	// 	return <div style={{ visibility: "hidden" }}>{body}</div>;
	// }

	// return body;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
