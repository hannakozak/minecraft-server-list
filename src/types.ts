export interface MinecraftServer {
	id: number;
	name: string;
	game: string;
	players: string; // Format: "current/max"
	status: 'online' | 'offline';
	version: string;
	type: 'Survival' | 'Creative' | 'Hardcore' | 'Modded' | 'Technical';
	region: string;
	mods: string[];
}
