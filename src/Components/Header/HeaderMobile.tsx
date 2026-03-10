import { Menu, Close } from '@mui/icons-material';
import { Box, Button, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useHomeContext } from '../../Pages/Provider/useHomeContext';

export default function HeaderMobile() {
	const [opened, setOpened] = useState<boolean>(false);

	const onToggle = (open: boolean) => setOpened(open);

	const { setCurrentProject } = useHomeContext();

	const onSelect = (selectedOption: number) => {
		setCurrentProject(selectedOption);
		setOpened(false);
	};

	return (
		<>
			<IconButton
				className="header__menu__icon"
				onClick={() => onToggle(true)}
			>
				<Menu />
			</IconButton>
			<Drawer
				anchor="right"
				open={opened}
				onClose={() => onToggle(false)}
			>
				<IconButton
					className="header__menu__icon"
					onClick={() => onToggle(false)}
				>
					<Close />
				</IconButton>
				<Box className="header__menu__container">
					<Stack className="header__menu">
						<Stack className="header__menu__header">
							<Button
								className="header__menu__header__title"
								onClick={() => onSelect(9)}
							>
								Acerca de mí
							</Button>

							<Typography className="header__menu__header__year">
								2021-2022
							</Typography>
							<Button
								className="header__menu__header__option"
								onClick={() => onSelect(1)}
							>
								~ MyWund
							</Button>
							<Button
								className="header__menu__header__option"
								onClick={() => onSelect(2)}
							>
								~ BillableHours
							</Button>

							<Typography className="header__menu__header__year">
								2023-2024
							</Typography>
							<Button
								className="header__menu__header__option"
								onClick={() => onSelect(3)}
							>
								~ Ley Urgencias
							</Button>
							<Button
								className="header__menu__header__option"
								onClick={() => onSelect(4)}
							>
								~ Personnel Requisition Process
							</Button>
							<Button
								className="header__menu__header__option"
								onClick={() => onSelect(5)}
							>
								~ Landing Sisefar
							</Button>

							<Typography className="header__menu__header__year">
								2025-2026
							</Typography>
							<Button
								className="header__menu__header__option"
								onClick={() => onSelect(6)}
							>
								~ Landing CEI
							</Button>
							<Button
								className="header__menu__header__option"
								onClick={() => onSelect(7)}
							>
								~ Nurasign
							</Button>
							<Button
								className="header__menu__header__option"
								onClick={() => onSelect(8)}
							>
								~ Promptxr
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Drawer>
		</>
	);
}
