import React, { useEffect, useState, useContext } from "react";
import Overlay from "../Overlay";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../auth/Login";
import { useGlobalContext } from "../../context";
import logo from "../../assets/logo.svg";
import Profile from "../Dashboard/Profile";

const Nav = () => {
	const { currentUser } = useGlobalContext();

	return (
		<nav className="flex justify-between">
			<div className="p-2 md:pl-24 grid place-items-center">
				<img src={logo} alt="taxed logo" className="w-32 md:w-40 " />
			</div>
			<h1 className="self-center text-3xl hidden md:block ">Make Payment</h1>
			<Profile />
		</nav>
	);
};

export default Nav;
