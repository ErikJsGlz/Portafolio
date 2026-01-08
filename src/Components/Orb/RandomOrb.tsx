import { useMotionValue, animate } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { Orb } from './Orb';

const TOP_LIMIT = 40;

export const RandomOrb = () => {
	const size = useMemo(() => Math.floor(Math.random() * 300) + 100, []);

	// Posición inicial
	const x = useMotionValue(Math.random() * window.innerWidth);
	const y = useMotionValue(Math.random() * (window.innerHeight * 0.5) + TOP_LIMIT);
	const speed = useMemo(() => 18 + Math.random() * 12, []);
	const floatAmplitude = useMemo(() => 40 + Math.random() * 60, []);

	// Movimiento
	useEffect(() => {
		const controlsX = animate(x, Math.random() * window.innerWidth, {
			duration: speed,
			ease: 'easeInOut',
			repeat: Infinity,
			repeatType: 'mirror',
		});

		const controlsY = animate(y, y.get() + floatAmplitude, {
			duration: speed * 0.4,
			ease: 'easeInOut',
			repeat: Infinity,
			repeatType: 'mirror',
		});

		return () => {
			controlsX.stop();
			controlsY.stop();
		};
	}, [x, y, speed, floatAmplitude]);

	return (
		<Orb
			index={0}
			mouseX={x}
			mouseY={y}
			width={size}
			height={size}
			show={true}
		/>
	);
};
