import React from "react";
import { useParams } from "react-router-dom";
import PlaylistComponent from "../components/Playlist";
import Track from "../components/Track";

const PlaylistPage: React.FC = () => {
	const { userId } = useParams<{ userId: string }>();

	return (
		<div className='p-4'>
			<h1 className='text-2xl mb-4'>Manage Playlist</h1>
			<PlaylistComponent userId={userId || ""} />
			<Track
				userId={userId || ""}
				playlistId=''
			/>
		</div>
	);
};

export default PlaylistPage;
