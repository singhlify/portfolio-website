// https://brianlovin.com/writing/adding-dark-mode-with-next-js
// https://codesandbox.io/s/mzj64x80ny?file=/src/styles.scss
// https://www.joshwcomeau.com/react/dark-mode/

import { useEffect, useState, ReactNode } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from "./globals";
import { useTheme, ThemeProvider as TP } from "next-themes";
import { createGlobalStyle } from "styled-components";

const Theme = ({ children }) => {
	// const { value } = useDarkMode(true);
	// const theme = value ? darkTheme : lightTheme;
	// const [mounted, setMounted] = useState(false);

	// useEffect(() => {
	// 	setMounted(true);
	// }, []);

	const globalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #000;
  }
`;

	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		console.log("theme>>>", theme);
	}, [theme]);

	// When mounted on client, now we can show the UI
	useEffect(() => {
		setTheme("dark");
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const body = (
		<TP>
			<ThemeProvider theme={theme}>
				<globalStyle />
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</TP>
	);

	// // prevents ssr flash for mismatched dark mode
	// if (!mounted) {
	// 	return <div style={{ visibility: "hidden" }}>{body}</div>;
	// }

	return body;
};

export default Theme;
