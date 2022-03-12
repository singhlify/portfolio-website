import Theme from "../styles/theme";
import { store } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
	return (
		<Theme>
			<Provider store={store}>
				<Component {...pageProps} />;
			</Provider>
		</Theme>
	);
}

export default MyApp;
