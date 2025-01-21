'use client';
import { ServerCard } from '@/components/ServerCard';
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

	return (
		<div className="grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			{/* main can be deleted and replaced with your own cards */}
			<main>
				<h1 className="text-2xl font-bold text-center">
					Minecraft Server List
				</h1>
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
					{serverData ? (
						serverData.map((server) => (
							<ServerCard key={server.id} server={server} />
						))
					) : (
						<div className="col-span-full text-center">
							<p className="text-gray-600">Loading data...</p>
						</div>
					)}
				</div>
			</main>
			{/* main can be deleted and replaced with your own cards */}
		</div>
	);
}
