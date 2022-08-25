import React from "react";
import { useNavigate } from "react-router";
import taxes from "./data";

const TaxCard = () => {
	const navigate = useNavigate();

	const handleOnclickCard = (id) => {
		const title = taxes.find((tax) => tax.id == id);

		localStorage.setItem("taxInfo", title.title);
		navigate("/payment/mobilemoney");
	};
	return (
		<div className="mt-20  tax_grid md:max-w-[80%]">
			{taxes.map((tax) => {
				const { src, title, id } = tax;
				return (
					<figure
						key={id}
						className="w-[300px] cursor-pointer bg-white hover:shadow-2xl"
						onClick={() => handleOnclickCard(id)}
					>
						<img src={src} alt={title} />
						<figcaption className="text-center font-medium p-8">
							{title}
						</figcaption>
					</figure>
				);
			})}
		</div>
	);
};

export default TaxCard;
