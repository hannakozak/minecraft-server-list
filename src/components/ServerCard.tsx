import { MinecraftServer } from '@/types';

export const ServerCard = ({ server }: { server: MinecraftServer }) => {
	return (
		<div
			className={`p-6 rounded-lg shadow-xl ${
				server.status === 'online'
					? 'bg-green-50 border border-green-300'
					: 'bg-red-50 border border-red-300'
			}`}
		>
			<h2 className="text-xl font-bold mb-2 text-gray-800">{server.name}</h2>
			<div className="text-sm text-gray-600 mb-4">
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
			<div className="text-sm text-gray-600">
				<p>
					<strong>Status:</strong>
					<span
						className={`font-bold ${
							server.status === 'online' ? 'text-green-600' : 'text-red-600'
						}`}
					>
						{server.status}
					</span>
				</p>
				<p>
					<strong>Mods:</strong> {server.mods.join(', ')}
				</p>
			</div>
		</div>
	);
};
