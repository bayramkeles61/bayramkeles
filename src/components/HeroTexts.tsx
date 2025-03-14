import { portfolioConfig } from "@/config/portfolio.config";

const HeroTexts = () => {
	const nameParts = portfolioConfig.name.split(" ");
	const firstName = nameParts[0];
	const lastName = nameParts.length > 2 ? nameParts[2] : nameParts[1];

	return (
		<div className="flex flex-col">
			<h1 className="font-rubik text-8xl font-bold name_underline text-primary max-sm:text-6xl">
				{firstName} {lastName}
			</h1>
			<div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
				{portfolioConfig.title}
			</div>
		</div>
	);
};
export default HeroTexts;
