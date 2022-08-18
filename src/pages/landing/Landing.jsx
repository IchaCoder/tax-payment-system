import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/tax_bg.webp";
import "./landing.css";

const Landing = () => {
	return (
		<section className="relative">
			<div className="pt-32">
				<h1 className="text-4xl md:text-5xl font-medium p-2 md:pl-24">
					Pay Your <span className="text-primary">Taxes</span> Now
				</h1>
				<small className="p-2 md:pl-24 tracking-widest">
					Paying taxes has never been easier
				</small>
				<Link
					to="/login"
					className="text-white p-2 m-2 mt-8 md:ml-24 rounded-lg grid place-items-center w-40 bg-primary md:text-lg"
				>
					Login/Register
				</Link>
			</div>
			<div className="absolute -top-8 right-10 hidden lg:block ">
				<img src={hero} alt="tax img" className="w-[470px] hero_img" />
			</div>
		</section>
	);
};

export default Landing;
