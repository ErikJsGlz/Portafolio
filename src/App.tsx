import { ReactComponent as LinkedinIcon } from './assets/icons/linkedin_icon.svg';
import { ReactComponent as EmailIcon } from './assets/icons/mail_icon.svg.svg';

import { useEffect, useState } from 'react';

import { Box, Stack } from '@mui/material';
import Header from './Components/Header';
import { Orbs } from './Components/Orb/Orbs';
import './App.scss';

function App() {
	return (
		<Box>
			<Header />
			<Orbs />
			<Box className="background" />
		</Box>
	);
}

export default App;
