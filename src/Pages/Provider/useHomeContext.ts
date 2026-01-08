import { useContext } from 'react';
import { HomeContext } from './HomeContext';

export function useHomeContext() {
	const context = useContext(HomeContext);

	if (!context) {
		throw new Error('useHomeContext debe de usarse dentro de <HomeProvider>');
	}

	return context;
}
