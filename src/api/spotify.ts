import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const SCOPES = [
	"playlist-modify-public",
	"playlist-modify-private",
	"user-read-private",
	"user-read-email",
];

export const getAuthorizeURL = (): string => {
	const state = generateRandomString(16);
	const scope = SCOPES.join(" ");

	return `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(
		scope
	)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${state}`;
};

const generateRandomString = (length: number): string => {
	let text = "";
	const possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};

export const createPlaylist = async (
	userId: string,
	name: string,
	description: string,
	isPublic: boolean
) => {
	const response = await axios.post(`${API_BASE_URL}/playlist/create`, {
		userId,
		name,
		description,
		isPublic,
	});
	return response.data;
};

export const addTracksToPlaylist = async (
	userId: string,
	playlistId: string,
	trackUris: string[]
) => {
	const response = await axios.post(`${API_BASE_URL}/track/add`, {
		userId,
		playlistId,
		trackUris,
	});
	return response.data;
};

export const addSegmentToTrack = async (
	userId: string,
	playlistId: string,
	trackUri: string,
	start: number,
	end: number
) => {
	const response = await axios.post(`${API_BASE_URL}/segment/add`, {
		userId,
		playlistId,
		trackUri,
		start,
		end,
	});
	return response.data;
};
