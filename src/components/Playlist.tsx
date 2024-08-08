import React, { useState } from "react";
import { createPlaylist } from "../api/spotify";

const Playlist: React.FC<{ userId: string }> = ({ userId }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [isPublic, setIsPublic] = useState(false);

	const handleCreatePlaylist = async () => {
		await createPlaylist(userId, name, description, isPublic);
		alert("Playlist created!");
	};

	return (
		<div className='p-4'>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Playlist Name'
				className='border p-2 mb-2 w-full'
			/>
			<input
				type='text'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder='Playlist Description'
				className='border p-2 mb-2 w-full'
			/>
			<label className='inline-flex items-center mb-2'>
				<input
					type='checkbox'
					checked={isPublic}
					onChange={(e) => setIsPublic(e.target.checked)}
					className='form-checkbox'
				/>
				<span className='ml-2'>Public</span>
			</label>
			<button
				onClick={handleCreatePlaylist}
				className='bg-green-500 text-white py-2 px-4 rounded'
			>
				Create Playlist
			</button>
		</div>
	);
};

export default Playlist;
