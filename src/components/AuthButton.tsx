import React from "react";
import { getAuthorizeURL } from "../api/spotify";

const AuthButton: React.FC = () => {
	const handleLogin = () => {
		const url = getAuthorizeURL();
		window.location.href = url;
	};

	return (
		<button
			onClick={handleLogin}
			className='bg-blue-500 text-white py-2 px-4 rounded'
		>
			Login with Spotify
		</button>
	);
};

export default AuthButton;
