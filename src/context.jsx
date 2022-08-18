/** @format */

import React, { useState, useEffect, useContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [pending, setPending] = useState(false);
	const [currentUser, setCurrentUser] = useState(true);
	const auth = getAuth(app);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(true);
				console.log("user active");
			}
			console.log(user);
			console.log("user not active");
			setPending(false);
		});
	}, [currentUser]);

	if (pending) {
		return (
			<div style={{ fontSize: "3rem", textAlign: "center" }}>Please wait </div>
		);
	}
	return (
		<AppContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
