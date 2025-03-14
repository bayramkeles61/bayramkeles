import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";

export default function Home() {
	return (
		<div className="h-full overflow-hidden flex flex-col items-start justify-center px-10">
			<HeroTexts />
			<div className="h-fit w-full py-4 flex gap-4">
				<SocialLinks />
			</div>
		</div>
	);
}
