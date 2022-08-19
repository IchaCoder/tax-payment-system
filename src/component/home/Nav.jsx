import React from "react";
import logo from "../../assets/logo.svg";
import Profile from "../Dashboard/Profile";

const Nav = () => {
	const userToken = JSON.parse(localStorage.getItem("userInfo"));

	return (
		<nav className="flex justify-between">
			<div className="p-2 md:pl-24 grid place-items-center">
				<img src={logo} alt="taxed logo" className="w-32 md:w-40 " />
			</div>
			{userToken && (
				<h1 className="self-center text-3xl hidden md:block ">Make Payment</h1>
			)}
			<Profile />
		</nav>
	);
};

export default Nav;
