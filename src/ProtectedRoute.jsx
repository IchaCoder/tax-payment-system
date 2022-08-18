import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "./context";

const Protectedroute = ({ children }) => {
	const { currentUser } = useGlobalContext();

	if (!currentUser) {
		return <Navigate to="/landing" />;
	}
	return children;
};

export default Protectedroute;
