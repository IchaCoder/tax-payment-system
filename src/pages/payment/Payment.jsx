import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ConfirmPayment from "../../component/payment/ConfirmPayment";
import { useGlobalContext } from "../../context";
import "./payment.css";

const Payment = () => {
	const { paymentError } = useGlobalContext();
	return (
		<section className="bg-gray-200 p-8 md:max-w-[70%] lg:max-w-[60%] mx-auto my-8">
			<nav className="flex gap-8 mt-10">
				<NavLink
					to="mobilemoney"
					className={({ isActive }) => {
						return `${
							isActive ? "border-b-2 border-solid border-primary" : ""
						} p-4 font-semibold`;
					}}
				>
					Mobile Money
				</NavLink>
				<NavLink
					to="card"
					className={({ isActive }) => {
						return `${
							isActive ? "border-b-2 border-solid border-primary" : ""
						} p-4 font-semibold`;
					}}
				>
					Card
				</NavLink>
				<NavLink
					to="bank"
					className={({ isActive }) => {
						return `${
							isActive ? "border-b-2 border-solid border-primary" : ""
						} p-4 font-semibold`;
					}}
				>
					Bank
				</NavLink>
			</nav>
			{paymentError && (
				<div className="bg-red-400 text-center p-1 mt-4">{paymentError}</div>
			)}
			<ConfirmPayment />
			<Outlet />
		</section>
	);
};

export default Payment;
