import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import './Orbs.scss';
import { Orb } from './Orb';
import { RandomOrb } from './RandomOrb';

const MOUSE_ORB_COUNT = 5;
const RANDOM_ORB_COUNT = 10;

export const Orbs = () => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	useEffect(() => {
		const onMove = (e: MouseEvent) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY - 300);
		};

		window.addEventListener('mousemove', onMove);
		return () => window.removeEventListener('mousemove', onMove);
	}, [mouseX, mouseY]);

	return (
		<div className="orbs-wrapper">
			{/* 🖱 Orbs que siguen al mouse */}
			{Array.from({ length: MOUSE_ORB_COUNT }).map((_, i) => (
				<Orb
					key={`mouse-${i}`}
					index={i}
					mouseX={mouseX}
					mouseY={mouseY}
					height={200}
					width={200}
				/>
			))}

			{/* 🎲 Orbs aleatorios */}
			{Array.from({ length: RANDOM_ORB_COUNT }).map((_, i) => (
				<RandomOrb key={`random-${i}`} />
			))}
		</div>
	);
};
