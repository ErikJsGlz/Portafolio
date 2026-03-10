import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { useHomeContext } from '../../Pages/Provider/useHomeContext';
import './Header.scss';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export default function Header() {
	const currentYear: string = new Date().getFullYear().toString();

	const [opened, setOpened] = useState<boolean>(false);

	const onToggle = () => {
		setOpened((prev) => !prev);
	};

	const { setCurrentProject } = useHomeContext();

	const isMobile = useMediaQuery('(max-width: 758px)');

	return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
}
