import { Box, Typography } from '@mui/material';
import Header from '../Components/Header';
import { Orbs } from '../Components/Orb/Orbs';

import './Home.scss';

export default function Home() {
	return (
		<Box className="home">
			<Header />
			<Orbs />

			<Typography className="home__title">
				PROJECTS
				<br />
				PORTFOLIO
			</Typography>
			<Box className="background" />
		</Box>
	);
}
