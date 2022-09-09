import React, { useState, useEffect, useContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";
import Loading from "./component/Loading";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [pending, setPending] = useState(true);
	const [isEmailVerified, setIsEmailVerified] = useState(true);
	const [isPaymentModalOpened, setIsPaymentModalOpened] = useState(false);
	const [paymentError, setPaymentError] = useState("");
	const [payableAmount, setPayableAmount] = useState(0);
	const [pathName, setPathName] = useState("");
	const [loginError, setLoginError] = useState(false);
	const [isSigningUp, setIsSigningUp] = useState(false);
	const auth = getAuth(app);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				console.log("user active");

				localStorage.setItem(
					"userInfo",
					JSON.stringify({
						name: user.displayName,
						email: user.email,
						verified: user.emailVerified,
					})
				);
			} else {
				localStorage.removeItem("userInfo");
			}
			console.log("user not active");
		});
	}, []);

	if (pending) {
		return <Loading />;
	}
	return (
		<AppContext.Provider
			value={{
				auth,
				setPending,
				isEmailVerified,
				setIsEmailVerified,
				isPaymentModalOpened,
				setIsPaymentModalOpened,
				paymentError,
				setPaymentError,
				payableAmount,
				setPayableAmount,
				pathName,
				setPathName,
				loginError,
				setLoginError,
				isSigningUp,
				setIsSigningUp,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
