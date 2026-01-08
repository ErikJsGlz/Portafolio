import { createContext } from 'react';

import type { HomeContextType } from './HomeProvider';

export const HomeContext = createContext<HomeContextType | null>(null);
