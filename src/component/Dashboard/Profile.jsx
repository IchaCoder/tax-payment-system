import React, { useState } from "react";
import { BsPersonCircle, IoMdArrowDropdown } from "react-icons/all";
import { useNavigate } from "react-router";
import { signOut, getAuth } from "firebase/auth";
import { app } from "../../firebase";

const Profile = () => {
	const [isHidden, setIsHidden] = useState(true);
	const navigate = useNavigate();
	const userToken = JSON.parse(localStorage.getItem("userInfo"));
	const auth = getAuth(app);

	const showLogout = () => {
		setIsHidden(!isHidden);
	};

	const handleLogOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/landing");
				console.log("Sign-out successful");
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
	};

	return (
		<>
			{userToken && (
				<section
					className="text-white relative flex bg-primary p-1 xs:p-4 m-4 md:mr-24 text-2xl justify-between mt-8 rounded cursor-pointer hover:shadow-lg h-fit z-20"
					onClick={showLogout}
				>
					<BsPersonCircle className="self-center pr-1" />
					<h3 className="p-1 text-custom md:text-lg">
						{userToken && userToken.name}
					</h3>
					<IoMdArrowDropdown className="self-center" />
					<div
						className={`absolute ${
							isHidden ? "hidden" : "block"
						} top-12 md:top-16 left-0 bg-cyan-700 hover:bg-cyan-300 hover:text-black p-2 w-full text-center text-lg`}
						onClick={handleLogOut}
					>
						Logout
					</div>
				</section>
			)}
		</>
	);
};

export default Profile;
