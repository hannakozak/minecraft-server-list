'use client';
import { ServerCard } from '@/app/components/ServerCard';
import { MinecraftServer } from '@/types';
import { useEffect, useState } from 'react';

/*
  Welcome to the simplegamehosting coding assignment!

  if you got this far great job! 🎉
  Now it's your turn to shine! 🌟
  
  The mock data is fetched from the server and displayed on the page.

  Your task is to create a dynamic card component for each server in the list.
  - The card should display the server's name, game, players, status, version etc, bonus points for displaying any extra data from the json response.
  - please use tailwind to style your components, you can use the existing styles in this file as a reference.
  - You can also use any other libraries you like to help you build the UI.
  
  for extra info please read the README.md file in the root of the project.
*/

export default function Home() {
	const [serverData, setServerData] = useState<MinecraftServer[] | null>(null);
	// you can update this fetching code if required but it's not necessary for the assignment.
	useEffect(() => {
		const fetchServerData = async () => {
			try {
				const response = await fetch('/api/mock');
				const data = await response.json();
				setServerData(data);
			} catch (error) {
				console.error('Failed to fetch server data:', error);
			}
		};

		fetchServerData();
	}, []);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleTheme = () => {
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	};

	return (
		<div className="flex flex-col  dark:bg-gray-dark items-center justify-items-center min-h-screen gap-16 p-10 font-[family-name:var(--font-geist-sans)]">
			{/* main can be deleted and replaced with your own cards */}

			<main>
				<header className="flex flex-col md:flex-row justify-between items-center mb-4 gap-5 md:gap-2">
					<h1 className="text-2xl font-bold text-center text-gray-medium dark:text-white">
						Minecraft Server List
					</h1>
					<button
						onClick={toggleTheme}
						className="px-2 py-2 text-sm font-semibold rounded-lg bg-gray-medium dark:border dark:border-white text-white hover:bg-gray-dark dark:bg-gray-medium dark:text-white"
					>
						Toggle Theme
					</button>
				</header>

				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2">
					{serverData ? (
						serverData.map((server) => (
							<ServerCard key={server.id} server={server} />
						))
					) : (
						<div className="col-span-full text-center">
							<p className="text-gray-600  dark:text-white">Loading data...</p>
						</div>
					)}
				</div>
			</main>
			{/* main can be deleted and replaced with your own cards */}
		</div>
	);
}
