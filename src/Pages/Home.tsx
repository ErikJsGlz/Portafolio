import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

import { useHomeContext } from './Provider/useHomeContext';
import { HomeProvider } from './Provider/HomeProvider';
import Header from '../Components/Header/Header';
import { Orbs } from '../Components/Orb/Orbs';
import './Home.scss';

function Component() {
	const {
		currentProjectIndex,
		currentTitle,
		currentInformationLabel,
		currentImage,
		onClickImage,
		imageClassName,
	} = useHomeContext();

	return (
		<Box className="home">
			<Header />
			<Orbs />

			<AnimatePresence mode="wait">
				<motion.div
					key={currentProjectIndex}
					className="home__body"
					style={{
						display: currentProjectIndex !== 0 ? 'flex' : 'none',
					}}
				>
					<Typography>{currentInformationLabel}</Typography>
				</motion.div>
			</AnimatePresence>

			<AnimatePresence mode="wait">
				<motion.div
					key={currentTitle}
					className="home__title"
					initial={{
						translateX: -100,
						opacity: 0,
					}}
					animate={{
						translateX: 0,
						opacity: 1,
					}}
					exit={{
						translateX: 100,
						opacity: 0,
					}}
					transition={{
						duration: 0.5,
						ease: [0.4, 0, 0.2, 1],
					}}
				>
					{currentTitle}
				</motion.div>
			</AnimatePresence>

			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				className="home__image-container"
			>
				<AnimatePresence mode="popLayout">
					{currentImage && (
						<motion.img
							key={currentImage}
							src={currentImage}
							onClick={onClickImage}
							whileHover={{ scale: 1.2 }}
							className={`home__image ${imageClassName}`}
							initial={{
								translateX: -100,
								opacity: 0,
							}}
							animate={{
								translateX: 0,
								opacity: 1,
							}}
							exit={{
								translateX: 100,
								opacity: 0,
							}}
							transition={{
								duration: 0.3,
								ease: [0.4, 0, 0.2, 1],
							}}
						/>
					)}
				</AnimatePresence>
			</Box>

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
