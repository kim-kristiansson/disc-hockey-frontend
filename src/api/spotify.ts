import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Adjust this to your backend URL

export const getAuthorizeURL = async () => {
	const response = await axios.get(`${API_BASE_URL}/auth/login`, {
		withCredentials: true,
	});
	return response.data;
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
