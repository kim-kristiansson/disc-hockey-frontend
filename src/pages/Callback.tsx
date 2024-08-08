import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Callback: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const accessToken = params.get("accessToken");
		const refreshToken = params.get("refreshToken");

		if (accessToken && refreshToken) {
			// Store tokens in local storage or context
			localStorage.setItem("accessToken", accessToken);
			localStorage.setItem("refreshToken", refreshToken);

			// Redirect to home or dashboard
			navigate("/");
		}
	}, [location, navigate]);

	return <div>Loading...</div>;
};

export default Callback;
