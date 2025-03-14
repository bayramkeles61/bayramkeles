import "@/styles/tailwind.css";
import "@/styles/global.css";
import type { Metadata } from "next";

import { Poppins, Rubik } from "next/font/google";
import { portfolioConfig } from "@/config/portfolio.config";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-poppins",
});
const rubik = Rubik({
	subsets: ["latin"],
	weight: "600",
	variable: "--font-rubik",
});

export const metadata: Metadata = {
	metadataBase: new URL(portfolioConfig.seo.url),
	title: {
		default: portfolioConfig.name,
		template: `%s - ${portfolioConfig.title}`,
	},
	description: portfolioConfig.description,

	// added new keywords for seo
	keywords: portfolioConfig.seo.keywords,
	authors: portfolioConfig.seo.authors,
	creator: portfolioConfig.name,

	openGraph: {
		type: "website",
		locale: "en_US",
		url: portfolioConfig.seo.url,
		title: portfolioConfig.name,
		description: portfolioConfig.description,
		images: [`${portfolioConfig.seo.url}/og-image.png`],
		siteName: portfolioConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: portfolioConfig.name,
		description: portfolioConfig.description,
		images: [`${portfolioConfig.seo.url}/og-image.png`],
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full antialiased" suppressHydrationWarning>
			<body className={`${poppins.variable} ${rubik.variable}`}>
				<Providers>
					<div className="absolute inset-0 h-full w-full overflow-hidden bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
						<Navbar />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
