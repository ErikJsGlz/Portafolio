import { motion, MotionValue, useSpring } from 'framer-motion';

type OrbProps = {
	index: number;
	mouseX: MotionValue<number>;
	mouseY: MotionValue<number>;
};

export const Orb = ({ index, mouseX, mouseY }: OrbProps) => {
	// replicando stagger:-0.02 → más atrás = más damping
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
			className="orb"
			style={{ x, y }}
		></motion.div>
	);
};
