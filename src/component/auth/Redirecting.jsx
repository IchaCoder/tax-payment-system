import React from "react";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context";

const Redirecting = () => {
	const navigate = useNavigate();
	const { setIsSigningUp } = useGlobalContext();

	const goToLogin = () => {
		setIsSigningUp(false);
		navigate("/login");
	};

	return (
		<>
			<div className="text-2xl text-center">Please verify your email</div>
			<button
				className={`log p-2 my-10 w-pref md:w-1/4 flex justify-center gap-3 mx-auto   rounded-lg bg-primary  text-white hover:shadow-inner2 transition-all duration-500 disabled:cursor-not-allowed disabled:bg-gray-400`}
				onClick={goToLogin}
			>
				Go to Login
			</button>
		</>
	);
};

export default Redirecting;
