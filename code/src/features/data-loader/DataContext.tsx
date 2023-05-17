import React, { createContext, useContext, ReactNode } from "react";
import { useFetchData } from "utils/hooks/useFetch";
import { APIs } from "config/Apis";

interface DataContextProps {
	data: any;
	error: Error | null;
	loading: boolean;
}

const DataContext = createContext<DataContextProps>({
	data: null,
	error: null,
	loading: true,
});

interface DataProviderProps {
	children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
	const { data, error, loading } = useFetchData(APIs.USERS);

	return (
		<DataContext.Provider value={{ data, error, loading }}>
			{children}
		</DataContext.Provider>
	);
};

export const useData = () => useContext(DataContext);
