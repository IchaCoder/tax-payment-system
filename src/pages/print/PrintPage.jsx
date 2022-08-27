import React from "react";
import { useGlobalContext } from "../../context";
import "./print.css";

const PrintPage = () => {
	const today = new Date();
	const { payableAmount, pathName } = useGlobalContext();

	const getPrintDetails = () => {
		const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
		const nameOfDay = days[today.getDay()];

		const userToken = JSON.parse(localStorage.getItem("userInfo"));
		const taxInfo = localStorage.getItem("taxInfo");

		const uniqueNumber = String(Date.now()).substring(8, Date.now().length);
		const id = `${userToken.name.split(" ")[0].substr(0, 1)}${userToken.name
			.split(" ")[1]
			.substr(0, 1)}${uniqueNumber}`;

		return { nameOfDay, id, taxInfo };
	};
	// console.log(getDayName());

	return (
		<div className="p-2 md:pl-24 print-parent">
			<table className="w-full md:w-[50%] print-me">
				<thead>
					<tr>
						<th className="w-full">Transaction Details</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="p-2">Transaction ID</td>
						<td className="p-2">{getPrintDetails().id}</td>
					</tr>
					<tr>
						<td className="p-2">Tax Type</td>
						<td className="p-2">{getPrintDetails().taxInfo}</td>
					</tr>
					<tr>
						<td className="p-2">Payment type</td>
						<td className="p-2 min-w-[250px]">{pathName}</td>
					</tr>
					<tr>
						<td className="p-2">Amount (GHS)</td>
						<td className="p-2">{payableAmount}</td>
					</tr>
					<tr>
						<td className="p-2">Date</td>
						<td className="p-2">
							{getPrintDetails().nameOfDay}, {today.getDate()}-
							{today.getMonth()}-{today.getFullYear()}
						</td>
					</tr>
				</tbody>
			</table>
			<button
				className="hover:text-white p-2 px-8 mt-8 rounded-lg grid place-items-center hover:bg-primary bg-gray-300 md:text-lg payment_btn m-2 md:ml-24"
				onClick={() => window.print()}
			>
				Print
			</button>
		</div>
	);
};

export default PrintPage;
