/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ scrollPosition }) => {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate("/login")}
			className={`${
				scrollPosition > 150
					? `hover:bg-primary hover:text-white sticky top-0 left-0`
					: ""
			} px-4 uppercase outline rounded-lg hover:bg-white hover:text-primary transition-all duration-500`}
		>
			log in
		</button>
	);
};

export default Login;
