import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio.config";

const SocialLinks = () => {
	const links = [
		{
			name: "Linkedin",
			link: portfolioConfig.socialLinks.linkedin,
			icon: <Linkedin />,
		},
		{
			name: "Github",
			link: portfolioConfig.socialLinks.github,
			icon: <Github />,
		},
	];
	return (
		<>
			{links.map((link, indx) => {
				return (
					<Link
						key={link.link}
						target="blank"
						href={link.link}
						className={cn(buttonVariants({ variant: "default", size: "icon" }))}
					>
						{link.icon}
					</Link>
				);
			})}
		</>
	);
};

export default SocialLinks;
