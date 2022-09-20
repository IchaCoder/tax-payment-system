import React from "react";

const VerifyModal = () => {
	const userInfo = JSON.parse(localStorage.getItem("userInfo"));
	const verified = userInfo.verified;

	return (
		<div
			className={`modal-overlay ${
				verified ? "hide-modal" : ""
			}  fixed z-50 top-0 left-0 h-screen w-screen grid items-center`}
		>
			<div
				className={`list ${
					verified ? "hide-overlay" : ""
				} bg-white text-blackVariant p-8 rounded w-[90%] md:max-w-[40%] mx-auto`}
			>
				<h3 className="font-bold text-red-400">
					Oops your account has not been verified, verify through your email and
					refresh the page
				</h3>
			</div>
		</div>
	);
};

export default VerifyModal;
