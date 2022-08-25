import React, { useEffect } from "react";

import { AiOutlineClose } from "react-icons/all";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context";

const ConfirmPayment = () => {
	const {
		setIsPaymentModalOpened,
		isPaymentModalOpened,
		payableAmount,
		setPayableAmount,
	} = useGlobalContext();
	const [counter, setCounter] = React.useState(5);
	const [confirmed, setIsConfirmed] = React.useState(false);
	const navigate = useNavigate();

	const handleConfirm = () => {
		setIsConfirmed(true);
	};

	useEffect(() => {
		let intervalId = null;
		if (confirmed) {
			intervalId = setInterval(() => {
				setCounter((prev) => prev - 1);
			}, 1000);
		}

		if (counter <= 0) {
			clearInterval(intervalId);
			setIsConfirmed(false);
			setIsPaymentModalOpened(false);
			setPayableAmount(null);
			navigate("/");
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [confirmed, counter]);

	return (
		<div
			className={`modal-overlay ${
				!isPaymentModalOpened ? "hide-modal" : ""
			}  fixed z-10 top-0 left-0 h-screen w-screen grid items-center`}
		>
			<div
				className={`list ${
					!isPaymentModalOpened ? "hide-overlay" : ""
				} bg-white text-blackVariant p-8 rounded w-[90%] md:max-w-[40%] mx-auto`}
			>
				<button
					className="cursor-pointer"
					onClick={() => setIsPaymentModalOpened(false)}
				>
					<AiOutlineClose className="text-red-600 transform hover:scale-110 transition duration-200 linear h-6 w-6" />
				</button>
				<h3 className="text-center mt-4">
					Are you sure you want to pay an amount of{" "}
					<strong>GHS{payableAmount}</strong>
				</h3>
				{confirmed && (
					<div className="mt-2 tracking-wide text-sm">
						Payment confirmed. <span>redirecting</span> in {counter}...
					</div>
				)}

				<div className="flex gap-4">
					<button
						className="text-white hover:text-black p-2 mt-8 rounded-lg grid place-items-center w-full hover:bg-gray-300 bg-primary md:text-lg payment_btn"
						onClick={handleConfirm}
						disabled={confirmed}
					>
						CONFIRM
					</button>
					<button
						className="hover:text-white p-2 mt-8 rounded-lg grid place-items-center w-full hover:bg-primary bg-gray-300 md:text-lg payment_btn"
						onClick={() => setIsPaymentModalOpened(false)}
						disabled={confirmed}
					>
						CANCEL
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmPayment;
