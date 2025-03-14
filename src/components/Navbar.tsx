"use client";

import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const data = [
		{
			title: "Home",
			icon: <HomeIcon className="h-full w-full " />,
			href: "/",
		},
	];
	const pathname = usePathname();

	return (
		<div className="w-full px-0 sm:px-5 m-auto bg-transparent p-6">
			<div className="flex items-center w-full justify-center gap-4">
				{data.map((item) => (
					<Link href={item.href} key={item.href}>
						<div className={cn(pathname === item.href && "font-bold")}>
							{item.title}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navbar;
