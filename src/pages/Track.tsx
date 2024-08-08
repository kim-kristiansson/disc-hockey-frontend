import React from "react";
import { useParams } from "react-router-dom";
import SegmentForm from "../components/SegmentForm";

const TrackPage: React.FC = () => {
	const { userId, playlistId, trackUri } = useParams<{
		userId: string;
		playlistId: string;
		trackUri: string;
	}>();

	return (
		<div className='p-4'>
			<h1 className='text-2xl mb-4'>Manage Track</h1>
			<SegmentForm
				userId={userId || ""}
				playlistId={playlistId || ""}
				trackUri={trackUri || ""}
			/>
		</div>
	);
};

export default TrackPage;
