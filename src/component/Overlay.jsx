/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../redux/actions";
import { AiOutlineClose } from "react-icons/all";
import { Link } from "react-router-dom";

const Overlay = () => {
	const dispatch = useDispatch();
	const modal = useSelector((state) => state.showModal.showModal);

	return (
		<div
			className={`modal-overlay ${
				modal ? "hide-modal" : ""
			}  fixed z-10 top-0 left-0 h-screen w-screen`}
		>
			<div className={`list ${modal ? "hide-overlay" : ""} bg-primary rounded`}>
				<button
					className="p-4 cursor-pointer"
					onClick={() => dispatch(hideModal())}
				>
					<AiOutlineClose className="text-red-600 transform hover:scale-110 transition duration-200 linear h-6 w-6" />
				</button>
				<ul className="text-lg">
					<Link to="/">
						<li className="text-white  hover:bg-white hover:text-primary cursor-button transition-all duration-500 p-4">
							Home
						</li>
					</Link>
					<Link to="/policy">
						<li className="text-white  hover:bg-white hover:text-primary cursor-button transition-all duration-500 p-4">
							Policy
						</li>
					</Link>
					<Link to="/about">
						<li className="text-white  hover:bg-white hover:text-primary cursor-button transition-all duration-500 p-4">
							About
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Overlay;
