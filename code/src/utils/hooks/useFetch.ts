import { useState, useEffect } from "react";

interface FetchResult {
	data: any;
	error: Error | null;
	loading: boolean;
}

export function useFetchData(url: string): FetchResult {
	const [data, setData] = useState<any | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`Error ${response.status}: ${response.statusText}`);
				}
				const responseData = await response.json();
				setData(responseData);
				setError(null);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, error, loading };
}
