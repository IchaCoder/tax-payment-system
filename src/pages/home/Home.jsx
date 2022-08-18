import React from "react";
import TaxCard from "../../component/Dashboard/TaxCard";

import "./home.css";

const Home = () => {
	return (
		<section className="bg-gray-200">
			<div className=" payment_img bg-gray-200">
				<h1 className="text-4xl md:text-5xl font-bold text-center pt-32 text-white">
					Our <span className="text-primary">Taxes</span> Our Future
				</h1>
			</div>
			<TaxCard />
		</section>
	);
};

export default Home;
