import React from "react";

const MobileMoney = () => {
	return (
		<form className="flex flex-col">
			<label htmlFor="tax" className="mt-6 pb-2">
				Tax Type
			</label>
			<input type="text" name="tax" className="shadow-lg rounded-sm p-2" />
			<label htmlFor="tax" className="mt-6 pb-2">
				Number
			</label>
			<input
				type="text"
				name="payment_info"
				className="shadow-lg rounded-sm p-2"
			/>
			<label htmlFor="payment_info" className="mt-6 pb-2">
				Payment Info
			</label>
			<input type="text" name="tax" className="shadow-lg rounded-sm p-2" />
			<label htmlFor="amount" className="mt-6 pb-2">
				Amount
			</label>
			<input type="text" name="amount" className="shadow-lg rounded-sm p-2" />
			<button className="text-white p-2 mt-8 rounded-lg grid place-items-center w-full bg-primary md:text-lg payment_btn">
				Proceed
			</button>
		</form>
	);
};

export default MobileMoney;
