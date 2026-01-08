import { useState } from 'react';
import { HomeContext } from './HomeContext';

export interface HomeContextType {
	currentProjectIndex: number;
	setCurrentProject: (index: number) => void;
	currentTitle: string;
	currentColorOrb: string;
}

export function HomeProvider({ children }: { children: React.ReactNode }) {
	const [currentProjectIndex, setCurrentProject] = useState<number>(0);

	const titles = [
		'Projects\nPortfolio',
		'MyWund',
		'BillableHours',
		'Ley\nUrgencias',
		'Project\nRequisition Process',
		'Landing\nSisefar',
		'Landing\nCEI',
		'Nurasign',
		'Promptxr',
	];

	const colorMap: Record<number, string> = {
		0: '',
		1: '--light',
		2: '--amber',
		3: '--blue',
		4: '--purple',
		5: '--teal',
		6: '--purple',
		7: '--purple',
		8: '--blue',
	};

	const currentColorOrb = colorMap[currentProjectIndex] || '';

	const contextValue = {
		currentProjectIndex,
		setCurrentProject,
		currentTitle: titles[currentProjectIndex],
		currentColorOrb,
	};

	return <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>;
}
