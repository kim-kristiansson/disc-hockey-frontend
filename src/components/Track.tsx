import React, { useState } from "react";
import { addTracksToPlaylist } from "../api/spotify";

const Track: React.FC<{ userId: string; playlistId: string }> = ({
	userId,
	playlistId,
}) => {
	const [trackUri, setTrackUri] = useState("");

	const handleAddTrack = async () => {
		await addTracksToPlaylist(userId, playlistId, [trackUri]);
		alert("Track added to playlist!");
	};

	return (
		<div className='p-4'>
			<input
				type='text'
				value={trackUri}
				onChange={(e) => setTrackUri(e.target.value)}
				placeholder='Track URI'
				className='border p-2 mb-2 w-full'
			/>
			<button
				onClick={handleAddTrack}
				className='bg-blue-500 text-white py-2 px-4 rounded'
			>
				Add Track
			</button>
		</div>
	);
};

export default Track;
