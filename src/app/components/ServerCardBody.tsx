import { MinecraftServer } from '@/types';
import Image from 'next/image';

interface ServerCardBodyProps {
	server: MinecraftServer;
	status: string;
}

export const ServerCardBody = ({ server, status }: ServerCardBodyProps) => {
	return (
		<>
			<div className="flex justify-center mt-0 items-center p-4 rounded-lg">
				<Image
					src="/minecraft.jpg"
					alt="minecraft server photo"
					width={300}
					height={200}
					className="rounded-lg"
					priority={true}
				/>
			</div>
			<div className="p-4 h-full flex flex-col justify-between">
				<h2 className="text-xl font-bold my-1  text-gray-dark dark:text-white text-center">
					{server.name}
				</h2>
				<div className="text-sm text-gray-dark dark:text-white mb-4">
					<p>
						<strong>Game:</strong> {server.game}
					</p>
					<p>
						<strong>Type:</strong> {server.type}
					</p>
					<p>
						<strong>Region:</strong> {server.region}
					</p>
					<p>
						<strong>Version:</strong> {server.version}
					</p>
					<p>
						<strong>Players:</strong> {server.players}
					</p>
				</div>
				<div className="text-sm text-gray-dark dark:text-white">
					<p>
						<strong> Status:</strong>
						<span
							className={`font-bold px-2 ${
								status === 'online'
									? 'text-green-dark dark:text-green-light'
									: 'text-gray-dark dark:text-gray-light'
							}`}
						>
							{status}
						</span>
					</p>
					<div>
						<strong>Mods:</strong>
						{server.mods.map((mod) => (
							<div
								key={mod}
								className="px-2 my-2 bg-slate-500 dark:bg-slate-200 text-white dark:text-gray-dark font-bold rounded-md"
							>
								{mod}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
