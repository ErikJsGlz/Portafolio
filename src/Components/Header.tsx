import { Box, Stack } from '@mui/material';

export default function Header() {
	const currentYear: string = new Date().getFullYear().toString();

	return (
		<Stack flexDirection={'row'}>
			<Box>Erik González Lucas</Box>
			<Box>{currentYear}</Box>
		</Stack>
	);
}
