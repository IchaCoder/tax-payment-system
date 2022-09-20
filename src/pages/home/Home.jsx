import React from "react";
import TaxCard from "../../component/Dashboard/TaxCard";
import VerifyModal from "../../component/verify-modal/VerifyModal";

import "./home.css";

const Home = () => {
	return (
		<section className="bg-gray-200 relative">
			<VerifyModal />
			<div className=" payment_img bg-gray-200">
				<h1 className="text-4xl md:text-5xl font-bold text-center pt-32 text-white">
					Our <span className="text-primary">Taxes</span> Our Future
				</h1>
			</div>
			<TaxCard />
			<div className="p-6"></div>
			<div className="absolute bottom-2 left-2">
				Copyright {new Date().getFullYear()} Taxed Inc
			</div>
		</section>
	);
};

export default Home;
