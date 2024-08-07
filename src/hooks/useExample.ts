import { useState } from "react";

const useExample = () => {
	const [example, setExample] = useState<string>("");

	return { example, setExample };
};

export default useExample;
