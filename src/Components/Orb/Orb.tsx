import { motion, MotionValue, useSpring } from 'framer-motion';
import { useHomeContext } from '../../Pages/Provider/useHomeContext';

type OrbProps = {
	index: number;
	mouseX: MotionValue<number>;
	mouseY: MotionValue<number>;
	height: number;
	width: number;
	show: boolean;
	style?: {
		opacity?: MotionValue<number>;
		scale?: MotionValue<number>;
	};
};

export const Orb = ({ index, mouseX, mouseY, height, width, show, style }: OrbProps) => {
	const { currentTitle, currentColorOrb } = useHomeContext();

	const x = useSpring(mouseX, {
		stiffness: 120,
		damping: 30 + index * 8,
		mass: 1,
	});

	const y = useSpring(mouseY, {
		stiffness: 120,
		damping: 30 + index * 8,
		mass: 1,
	});

	return (
		<motion.div
			key={`${currentTitle}`}
			className={`orb ${'orb' + currentColorOrb}`}
			initial={{
				opacity: 0,
				scale: 0.6,
				translateX: 0,
			}}
			animate={{
				opacity: show ? 1 : 0,
				scale: show ? 1 : 0.2,
				translateX: show ? 0 : -200,
			}}
			transition={{
				opacity: {
					duration: show ? 0.6 : 0.4,
					ease: 'easeInOut',
				},
				scale: {
					duration: show ? 0.8 : 0.5,
					ease: show ? 'easeOut' : 'easeIn',
				},
				translateX: {
					duration: 0.5,
					ease: show ? 'easeOut' : 'easeIn',
				},
			}}
			style={{
				x,
				y,
				height,
				width,
				...style,
				pointerEvents: 'none',
			}}
		/>
	);
};
