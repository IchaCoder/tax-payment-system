import React from "react";
import { useGlobalContext } from "../../context";

const NotVerified = () => {
	const { setIsEmailVerified } = useGlobalContext();
	return (
		<>
			<div className="text-2xl text-center">
				Email not verified, please check your email...
			</div>
			<button
				className={`log p-2 my-10 w-pref md:w-1/4 flex justify-center gap-3 mx-auto uppercase  rounded-lg bg-primary  text-white hover:shadow-inner2 transition-all duration-500 disabled:cursor-not-allowed disabled:bg-gray-400`}
				onClick={() => setIsEmailVerified(true)}
			>
				OK
			</button>
		</>
	);
};

export default NotVerified;
