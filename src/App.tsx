import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlaylistPage from "./pages/Playlist";
import TrackPage from "./pages/Track";
import Callback from "./pages/Callback";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/playlist/:userId'
					element={<PlaylistPage />}
				/>
				<Route
					path='/track/:userId/:playlistId/:trackUri'
					element={<TrackPage />}
				/>
				<Route
					path='/callback'
					element={<Callback />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
