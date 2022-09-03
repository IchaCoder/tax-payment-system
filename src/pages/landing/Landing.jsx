import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/tax_bg.webp";
import "./landing.css";

const Landing = () => {
	return (
		<section className="relative">
			<div className="pt-[45%] md:pt-36 pl-5 md:pl-24">
				<h1 className="text-4xl md:text-5xl font-medium ">
					Pay Your <span className="text-primary">Taxes</span> Now
				</h1>
				<small className=" tracking-widest">
					Paying taxes has never been easier. Experience the feeling of paying
					your taxes with ease
				</small>
				<Link
					to="/login"
					className="text-white p-2 mt-8 md:ml-24 rounded-lg grid place-items-center w-40 hover:shadow-2xl hover:opacity-90 bg-primary md:text-lg landing_btn"
				>
					Login/Register
				</Link>
			</div>
			<div className="absolute -top-8 right-10 hidden lg:block ">
				<img src={hero} alt="tax img" className="w-[470px] hero_img" />
			</div>
			<div className="fixed bottom-2 left-5 md:left-24 font-semibold">
				Copyright {new Date().getFullYear()} Taxed Inc
			</div>
		</section>
	);
};

export default Landing;
