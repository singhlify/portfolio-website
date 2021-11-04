import React, { Children } from "react";
import { MainContent } from "./MainWrapper.style";

const MainWrapper = ({ children }) => {
	return <MainContent>{children}</MainContent>;
};

export default MainWrapper;
