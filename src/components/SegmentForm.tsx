import React, { useState } from "react";
import { addSegmentToTrack } from "../api/spotify";

const SegmentForm: React.FC<{
	userId: string;
	playlistId: string;
	trackUri: string;
}> = ({ userId, playlistId, trackUri }) => {
	const [start, setStart] = useState<number>(0);
	const [end, setEnd] = useState<number>(0);

	const handleAddSegment = async () => {
		await addSegmentToTrack(userId, playlistId, trackUri, start, end);
		alert("Segment added to track!");
	};

	return (
		<div className='p-4'>
			<input
				type='number'
				value={start}
				onChange={(e) => setStart(parseInt(e.target.value))}
				placeholder='Start Time (seconds)'
				className='border p-2 mb-2 w-full'
			/>
			<input
				type='number'
				value={end}
				onChange={(e) => setEnd(parseInt(e.target.value))}
				placeholder='End Time (seconds)'
				className='border p-2 mb-2 w-full'
			/>
			<button
				onClick={handleAddSegment}
				className='bg-red-500 text-white py-2 px-4 rounded'
			>
				Add Segment
			</button>
		</div>
	);
};

export default SegmentForm;
