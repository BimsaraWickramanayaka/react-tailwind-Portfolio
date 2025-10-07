import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// inline=false -> floating button (desktop)
// inline=true  -> compact, non-fixed button (for mobile placement)
export const ThemeToggle = ({ inline = false }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			localStorage.setItem("theme", "light");
			setIsDarkMode(false);
		}
	}, []);

	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDarkMode(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDarkMode(true);
		}
	};

	return (
		<button
			onClick={toggleTheme}
			aria-label="Toggle theme"
			className={cn(
				inline
					? "p-2 rounded-full transition-colors duration-300"
					: "hidden md:inline-flex fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
				"focus:outline-none"
			)}
		>
			{isDarkMode ? (
				<Sun className="h-6 w-6 text-yellow-300" />
			) : (
				<Moon className="h-6 w-6 text-blue-900" />
			)}
		</button>
	);
};