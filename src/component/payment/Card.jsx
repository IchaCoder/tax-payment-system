import React from "react";
import { useGlobalContext } from "../../context";

const Card = () => {
	const taxInfo = localStorage.getItem("taxInfo");

	const {
		setPaymentError,
		setIsPaymentModalOpened,
		payableAmount,
		setPayableAmount,
	} = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		setPaymentError("");

		if (payableAmount < 1) {
			setPaymentError("Amount cannot be less than GHS1");
			return;
		}

		setIsPaymentModalOpened(true);
	};

	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<label htmlFor="card_number" className="mt-6 pb-2">
				Card Number
			</label>
			<input
				type="text"
				name="card_number"
				className="shadow-lg rounded-sm p-2"
				required
			/>
			<div className="mt-6 pb-2 flex flex-col md:block">
				<label htmlFor="expiry" className=" mr-4">
					Expiry
				</label>
				<input
					type="text"
					name="expiry"
					className="shadow-lg rounded-sm p-2 md:w-20"
					required
				/>
				<label htmlFor="CVV" className="mt-6 pb-2 md:ml-8 p-2">
					CVV
				</label>
				<input
					type="text"
					name="cvv"
					className="shadow-lg rounded-sm p-2 md:w-20"
					required
				/>
			</div>
			<div className="mt-6 pb-2 flex flex-col md:block">
				<label htmlFor="tax type" className=" mr-4">
					Tax Type
				</label>
				<input
					type="text"
					name="tax type"
					className="shadow-lg rounded-sm p-2 md:w-20 cursor-not-allowed"
					disabled
					required
					value={taxInfo}
				/>
				<label htmlFor="amount" className="mt-6 pb-2 md:ml-8 p-2">
					Amount(GHS)
				</label>
				<input
					type="text"
					name="amount"
					className="shadow-lg rounded-sm p-2 md:w-44"
					placeholder="1GHS MIN"
					required
					onChange={(e) => setPayableAmount(e.target.value)}
				/>
			</div>
			<button className="text-white hover:text-black hover:bg-gray-300 p-2 mt-8 rounded-lg grid place-items-center w-full bg-primary md:text-lg payment_btn">
				Proceed
			</button>
		</form>
	);
};

export default Card;
