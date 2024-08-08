import React from "react";
import AuthButton from "../components/AuthButton";

const Home: React.FC = () => {
	return (
		<div className='p-4'>
			<h1 className='text-2xl mb-4'>
				Welcome to Spotify Playlist Manager
			</h1>
			<AuthButton />
		</div>
	);
};

export default Home;
