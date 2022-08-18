import React from "react";

const Card = () => {
	return (
		<form className="flex flex-col">
			<label htmlFor="card_number" className="mt-6 pb-2">
				Card Number
			</label>
			<input
				type="text"
				name="card_number"
				className="shadow-lg rounded-sm p-2"
			/>
			<div className="mt-6 pb-2 flex flex-col md:block">
				<label htmlFor="expiry" className=" mr-4">
					Expiry
				</label>
				<input
					type="text"
					name="tax"
					className="shadow-lg rounded-sm p-2 md:w-20"
				/>
				<label htmlFor="CVV" className="mt-6 pb-2 md:ml-8 p-2">
					CVV
				</label>
				<input
					type="text"
					name="tax"
					className="shadow-lg rounded-sm p-2 md:w-20"
				/>
			</div>
			<div className="mt-6 pb-2 flex flex-col md:block">
				<label htmlFor="tax type" className=" mr-4">
					Tax Type
				</label>
				<input
					type="text"
					name="tax type"
					className="shadow-lg rounded-sm p-2 md:w-20"
				/>
				<label htmlFor="amount" className="mt-6 pb-2 md:ml-8 p-2">
					Amount(GHS)
				</label>
				<input
					type="text"
					name="amount"
					className="shadow-lg rounded-sm p-2 md:w-44"
				/>
			</div>
			<button className="text-white p-2 mt-8 rounded-lg grid place-items-center w-full bg-primary md:text-lg payment_btn">
				Proceed
			</button>
		</form>
	);
};

export default Card;
