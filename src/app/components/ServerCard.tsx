import { useState } from 'react';
import { MinecraftServer } from '@/types';
import { ServerCardHeader } from './ServerCardHeader';
import { ServerCardFooter } from './ServerCardFooter';
import { ServerCardBody } from './ServerCardBody';

export const ServerCard = ({ server }: { server: MinecraftServer }) => {
	const [status, setStatus] = useState<'online' | 'offline'>(server.status);
	const toggleStatus = () => {
		setStatus((prevStatus) => (prevStatus === 'online' ? 'offline' : 'online'));
	};
	return (
		<div
			className={`rounded-lg shadow-xl flex flex-col justify-between rounded-b-lg ${
				status === 'online'
					? 'bg-green-light border border-gray-medium dark:bg-green-dark '
					: 'bg-gray-light border border-gray-medium dark:bg-gray-dark dark:border dark:border-white'
			}`}
		>
			<ServerCardHeader
				server={server}
				status={status}
				toggleStatus={toggleStatus}
			/>
			<ServerCardBody server={server} status={status} />
			<ServerCardFooter />
		</div>
	);
};
