import { HomeContext } from './HomeContext';

export interface HomeContextType {}

export function HomeProvider({ children }: { children: React.ReactNode }) {
	const contextValue = {};

	return <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>;
}
