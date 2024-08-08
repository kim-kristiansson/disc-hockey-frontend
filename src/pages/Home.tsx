import React from "react";
import { getAuthorizeURL } from "../api/spotify";

const Home: React.FC = () => {
	const handleLogin = () => {
		const url = getAuthorizeURL();
		window.location.href = url;
	};

	return (
		<div className='p-4'>
			<h1 className='text-2xl mb-4'>
				Welcome to Spotify Playlist Manager
			</h1>
			<button
				onClick={handleLogin}
				className='bg-blue-500 text-white py-2 px-4 rounded'
			>
				Login with Spotify
			</button>
		</div>
	);
};

export default Home;
