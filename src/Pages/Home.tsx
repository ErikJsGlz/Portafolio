import { Box, duration, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

import Header from '../Components/Header/Header';
import { Orbs } from '../Components/Orb/Orbs';

import './Home.scss';
import { HomeProvider } from './Provider/HomeProvider';
import { useHomeContext } from './Provider/useHomeContext';

function Component() {
	const { currentProjectIndex, currentTitle } = useHomeContext();

	return (
		<Box className="home">
			<Header />
			<Orbs />

			<AnimatePresence mode="wait">
				<motion.div
					key={currentTitle}
					className="home__title"
					initial={{
						translateX: 0,
					}}
					transition={{
						translate: {
							duration: 0.5,
							ease: [0.4, 0, 0.2, 1],
						},
					}}
				>
					{currentTitle}
				</motion.div>
			</AnimatePresence>
			<Box className="background" />
		</Box>
	);
}

export default function Home() {
	return (
		<HomeProvider>
			<Component />
		</HomeProvider>
	);
}
