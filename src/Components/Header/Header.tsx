import { Box, Button, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

import './Header.scss';

export default function Header() {
	const currentYear: string = new Date().getFullYear().toString();

	const [opened, setOpened] = useState<boolean>(false);

	const onToggle = () => {
		setOpened((prev) => !prev);
	};

	return (
		<Stack className="header">
			<Typography className="header__label">Erik González Lucas</Typography>

			<Typography
				className="header__label"
				style={{ textAlign: 'center' }}
			>
				Portfolio
			</Typography>

			<Box flex={1}>
				<Button
					disableRipple
					className={'header__button'}
					onClick={onToggle}
				>
					<Typography style={{ textAlign: 'end' }}>{currentYear}</Typography>

					<motion.span
						className="header__bubble"
						initial={false}
						animate={{ scale: opened ? 120 : 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					/>

					<motion.div
						className="header__bubble__body"
						initial={false}
						animate={{
							opacity: opened ? 1 : 0,
							pointerEvents: opened ? 'auto' : 'none',
						}}
						transition={{ delay: opened ? 0.2 : 0 }}
					>
						<Stack className="header__bubble__body__content">
							<Typography className="header__bubble__body__content__year">
								2021-2022
							</Typography>
							<Button
								className="header__bubble__body__content__project"
								onClick={() => {
									console.log('entra');
								}}
							>
								MyWund
							</Button>
							<Button className="header__bubble__body__content__project">
								BillableHours
							</Button>
						</Stack>

						<Stack className="header__bubble__body__content">
							<Typography className="header__bubble__body__content__year">
								2023-2024
							</Typography>
							<Button className="header__bubble__body__content__project">
								Ley Urgencias
							</Button>
							<Button className="header__bubble__body__content__project">
								Project Requisition Process
							</Button>
							<Button className="header__bubble__body__content__project">
								Landing Sisefar
							</Button>
						</Stack>

						<Stack className="header__bubble__body__content">
							<Typography className="header__bubble__body__content__year">
								2025
							</Typography>
							<Button className="header__bubble__body__content__project">
								Landing CEI
							</Button>
							<Button className="header__bubble__body__content__project">
								Nurasign
							</Button>
							<Button className="header__bubble__body__content__project">
								Promptxr
							</Button>
						</Stack>
					</motion.div>
				</Button>
			</Box>
		</Stack>
	);
}
