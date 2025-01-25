interface ServerCardHeaderProps {
	server: { version: string };
	status: string;
	toggleStatus: () => void;
}

export const ServerCardHeader = ({
	server,
	status,
	toggleStatus,
}: ServerCardHeaderProps) => {
	return (
		<header className="flex justify-between bg-gray-medium text-white font-bold rounded-t-lg p-2">
			<div>{server.version}</div>
			<div className="font-minecraft uppercase">server</div>
			<button
				onClick={toggleStatus}
				className={`px-2 py-2 text-xs font-semibold rounded-lg ${
					status === 'online'
						? 'bg-green-light text-green-dark hover:bg-green-medium dark:bg-green-dark dark:text-white dark:hover:bg-green-medium'
						: 'bg-gray-medium text-white hover:bg-gray-dark'
				}`}
			>
				{status === 'online' ? 'On' : 'Off'}
			</button>
		</header>
	);
};
