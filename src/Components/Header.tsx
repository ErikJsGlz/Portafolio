import { Box, Stack, Typography } from '@mui/material';

import './Header.scss';

export default function Header() {
	const currentYear: string = new Date().getFullYear().toString();

	return (
		<Stack className="header">
			<Typography>Erik González Lucas</Typography>
			<Typography style={{ textAlign: 'center' }}>Portfolio</Typography>
			<Typography style={{ textAlign: 'end' }}>{currentYear}</Typography>
		</Stack>
	);
}
