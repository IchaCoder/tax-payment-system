import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "./context";

const Protectedroute = ({ children }) => {
	const userToken = JSON.parse(localStorage.getItem("userInfo"));

	if (!userToken) {
		return <Navigate to="/landing" />;
	}
	return children;
};

export default Protectedroute;
