import React, { useRef } from "react";
import { useGlobalContext } from "../../context";

const MobileMoney = () => {
	const taxInfo = localStorage.getItem("taxInfo");
	const {
		setPaymentError,
		setIsPaymentModalOpened,
		payableAmount,
		setPayableAmount,
	} = useGlobalContext();

	const number = useRef(null);

	const proceed = (e) => {
		e.preventDefault();
		setPaymentError("");

		const numberValue = number.current.value;
		if (payableAmount < 1) {
			setPaymentError("Amount cannot be less than GHS1");
			return;
		}

		if (!/^[0-9]{1,}$/.test(number.current.value)) {
			setPaymentError("Mobile number should contain number only");
			return;
		} else if (numberValue.length !== 10) {
			setPaymentError("Mobile number should be 10 digits");
			console.log(numberValue.length);
			return;
		}

		setIsPaymentModalOpened(true);
	};

	return (
		<form className="flex flex-col" onSubmit={proceed}>
			<label htmlFor="tax" className="mt-6 pb-2">
				Tax Type
			</label>
			<input
				type="text"
				name="tax"
				className="shadow-lg rounded-sm p-2 cursor-not-allowed"
				required
				value={taxInfo}
				disabled
			/>
			<label htmlFor="tax" className="mt-6 pb-2">
				Mobile Number
			</label>
			<input
				type="text"
				name="payment_info"
				className="shadow-lg rounded-sm p-2"
				required
				ref={number}
			/>
			<label htmlFor="payment_info" className="mt-6 pb-2">
				Payment Provider
			</label>
			<input
				type="text"
				name="tax"
				className="shadow-lg rounded-sm p-2 cursor-not-allowed"
				required
				value="MTN"
				disabled
			/>
			<label htmlFor="amount" className="mt-6 pb-2">
				Amount
			</label>
			<input
				type="text"
				name="amount"
				className="shadow-lg rounded-sm p-2"
				placeholder="1GHS MIN"
				required
				onChange={(e) => setPayableAmount(e.target.value)}
			/>
			<button className="text-white hover:text-black hover:bg-gray-300 p-2 mt-8 rounded-lg grid place-items-center w-full bg-primary md:text-lg payment_btn">
				Proceed
			</button>
			<div className="mt-4">
				<small>
					Note:{" "}
					<img
						src="https://goldstreetbusiness.com/wp-content/uploads/2020/08/momo.jpg"
						alt="mtn momo"
						className="w-12 h-12"
					/>{" "}
					MTN MOMO is the only acceptable mobile payment now
				</small>
			</div>
		</form>
	);
};

export default MobileMoney;
