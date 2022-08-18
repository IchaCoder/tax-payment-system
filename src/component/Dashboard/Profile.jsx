import React, { useState } from "react";
import { BsPersonCircle, IoMdArrowDropdown } from "react-icons/all";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context";

const Profile = () => {
	const [isHidden, setIsHidden] = useState(true);
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("user"));

	const showLogout = () => {
		setIsHidden(!isHidden);
	};

	const Logout = () => {
		console.log("logging out....");

		navigate("/");
	};

	return (
		<section
			className="text-white relative flex bg-primary p-1 xs:p-4 m-4 md:mr-24 text-2xl justify-between mt-8 rounded cursor-pointer hover:shadow-lg h-fit"
			onClick={showLogout}
		>
			<BsPersonCircle className="self-center pr-1" />
			<h3 className="p-1 text-custom md:text-lg">
				{user ? user.userName : "Emmanuel Yeboah"}
			</h3>
			<IoMdArrowDropdown className="self-center" />
			<div
				className={`absolute ${
					isHidden ? "hidden" : "block"
				} top-16 left-0 bg-cyan-700 hover:bg-cyan-300 hover:text-black p-2 w-full text-center text-lg`}
				onClick={Logout}
			>
				Logout
			</div>
		</section>
	);
};

export default Profile;
