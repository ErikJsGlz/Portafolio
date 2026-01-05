import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import './Orbs.scss';
import { Orb } from './Orb';

const ORB_COUNT = 5;

export const Orbs = () => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	useEffect(() => {
		const onMove = (e: MouseEvent) => {
			mouseX.set(e.clientX - 0);
			mouseY.set(e.clientY - 300);
		};

		window.addEventListener('mousemove', onMove);
		return () => window.removeEventListener('mousemove', onMove);
	}, [mouseX, mouseY]);

	return (
		<div className="orbs-wrapper">
			{Array.from({ length: ORB_COUNT }).map((_, i) => (
				<Orb
					key={i}
					index={i}
					mouseX={mouseX}
					mouseY={mouseY}
				/>
			))}
		</div>
	);
};
