/** @format */

import React, { useContext } from "react";
import { signOut, getAuth } from "firebase/auth";
import { app } from "../../firebase";
import { AppContext } from "../../context";
import { useNavigate } from "react-router";

const Logout = ({ scrollPosition }) => {
	const { setCurrentUser } = useContext(AppContext);
	const navigate = useNavigate();

	const auth = getAuth(app);
	const handleLogOut = () => {
		signOut(auth)
			.then(() => {
				setCurrentUser(null);

				navigate("/");
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
	};

	return (
		<button
			onClick={handleLogOut}
			className={`${
				scrollPosition > 150
					? `hover:bg-primary hover:text-white sticky top-0 left-0`
					: ""
			} px-4 uppercase outline rounded-lg hover:bg-white hover:text-primary transition-all duration-500`}
		>
			log out
		</button>
	);
};

export default Logout;
