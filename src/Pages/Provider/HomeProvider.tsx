import { useEffect, useState } from 'react';

import { HomeContext } from './HomeContext';

import MyWund01 from '../../assets/img/mywund_layout/mywund_mobile_01.png';
import MyWund02 from '../../assets/img/mywund_layout/mywund_mobile_02.png';
import MyWund03 from '../../assets/img/mywund_layout/mywund_mobile_03.png';
import MyWund04 from '../../assets/img/mywund_layout/mywund_mobile_04.png';
import MyWund05 from '../../assets/img/mywund_layout/mywund_mobile_05.png';

import Billable01 from '../../assets/img/billable_layout/billa_desktop_01.png';
import Billable02 from '../../assets/img/billable_layout/billa_desktop_02.png';
import Billable03 from '../../assets/img/billable_layout/billa_desktop_03.png';
import Billable04 from '../../assets/img/billable_layout/billa_mobile_01.png';
import Billable05 from '../../assets/img/billable_layout/billa_mobile_02.png';
import Billable06 from '../../assets/img/billable_layout/billa_mobile_03.png';
import Billable07 from '../../assets/img/billable_layout/billa_mobile_04.png';
import Billable08 from '../../assets/img/billable_layout/billa_mobile_05.png';

import Ley01 from '../../assets/img/ley_layout/ley_desktop_01.png';
import Ley02 from '../../assets/img/ley_layout/ley_desktop_02.png';
import Ley03 from '../../assets/img/ley_layout/ley_desktop_03.png';

import Prp01 from '../../assets/img/prp_layout/prp_desktop_01.png';
import Prp02 from '../../assets/img/prp_layout/prp_desktop_02.png';
import Prp03 from '../../assets/img/prp_layout/prp_desktop_03.png';
import Prp04 from '../../assets/img/prp_layout/prp_desktop_04.png';
import Prp05 from '../../assets/img/prp_layout/prp_mobile_01.png';
import Prp06 from '../../assets/img/prp_layout/prp_mobile_02.png';
import Prp07 from '../../assets/img/prp_layout/prp_mobile_03.png';
import Prp08 from '../../assets/img/prp_layout/prp_mobile_04.png';
import Prp09 from '../../assets/img/prp_layout/prp_mobile_05.png';

import Sisefar01 from '../../assets/img/sisefar_layout/sisefar_desktop_01.png';
import Sisefar02 from '../../assets/img/sisefar_layout/sisefar_desktop_02.png';
import Sisefar03 from '../../assets/img/sisefar_layout/sisefar_desktop_03.png';

export interface HomeContextType {
	currentProjectIndex: number;
	setCurrentProject: (index: number) => void;
	currentTitle: string;
	currentColorOrb: string;
	currentInformationLabel: string;
	onClickImage: () => void;
	currentImage: string | undefined;
	imageClassName: string;
}

export function HomeProvider({ children }: { children: React.ReactNode }) {
	const [currentProjectIndex, setCurrentProject] = useState<number>(0);
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

	const titles = [
		'Projects\nPortfolio',
		'MyWund',
		'Billable\nHours',
		'Ley\nUrgencias',
		'Personnel\nRequisition\nProcess',
		'Landing\nSisefar',
		'Landing\nCEI',
		'Nurasign',
		'Promptxr',
	];

	const informationLabels = [
		'',
		'Software para registrar y visualizar la evolución de heridas de pacientes\nColaboré con un equipo de enfermeras de Chile. Desarrollé el Frontend con Flutter y Backend con Flask.',
		'Pequeño software para registrar las horas invertidas de un colaborador en un proyecto específico.\nTrabajé principalmente en el Backend con NodeJS e hice algunas funcionalidades del Frontend.',
		'Formulario para registrar la estancia hospitalaria de un paciente\nMe encargué del diseño del sistema y el desarrollo del Frontend y del Backend.',
		'Proyecto para gestionar requisiciones de personal haciendo uso de aprobaciones escalonadas.\nTrabajé en el diseño de la plataforma, en levantar los recursos y el desarrollo del Frontend, de Web y Mobile y del Backend.',
		'Una Landing Page para el sistema SISEFARPRO, un software para la gestión y seguimiento de medicamentos.\nMe encargué del desarrollo del Frontend.',
		'Una Landing Page para la compañía CHRISTUS CEI.\nMe encargué del desarrollo de toda la página así como de toda la funcionalidad.',
		'Proyecto refactorizado desde cero, enfocado a la asignación de enfermeras en centros hospitalarios.\nMe encargué del diseño del Frontend, así como la limpieza y optimización de la base de datos.',
		'Proyecto refactorizado completamente, enfocado a la realización y validación de protocolos a pacientes.\nMe encargué principalmente en el desarrollo del Frontend y en levantar recursos.',
	];

	const colorMap: Record<number, string> = {
		0: '',
		1: '--light',
		2: '--amber',
		3: '--blue',
		4: '--purple',
		5: '--teal',
		6: '--purple',
		7: '--purple',
		8: '--blue',
	};

	const currentColorOrb = colorMap[currentProjectIndex] || '';

	const myWundImages = [MyWund01, MyWund02, MyWund03, MyWund04, MyWund05];

	const billableImages = [
		Billable01,
		Billable02,
		Billable03,
		Billable04,
		Billable05,
		Billable06,
		Billable07,
		Billable08,
	];

	const leyImages = [Ley01, Ley02, Ley03];

	const prpImages = [Prp01, Prp02, Prp03, Prp04, Prp05, Prp06, Prp07, Prp08, Prp09];

	const sisefarImages = [Sisefar01, Sisefar02, Sisefar03];

	const images: Record<number, string[]> = {
		0: [],
		1: myWundImages,
		2: billableImages,
		3: leyImages,
		4: prpImages,
		5: sisefarImages,
	};

	const onClickImage = () => {
		console.log(currentImageIndex);
		const maxIndex = images[currentProjectIndex]?.length || 0;
		console.log(maxIndex);
		setCurrentImageIndex((prev) => (prev + 1) % maxIndex);
	};

	const currentImage = () => {
		return images[currentProjectIndex].length !== 0
			? images[currentProjectIndex][currentImageIndex]
			: undefined;
	};

	useEffect(() => {
		setCurrentImageIndex(0);
	}, [currentProjectIndex]);

	const mobileImagesMap: Record<number, string[]> = {
		1: [MyWund01, MyWund02, MyWund03, MyWund04, MyWund05], // MyWund (mobile)
		2: [Billable04, Billable05, Billable06, Billable07, Billable08], // Billable mobile
		4: [Prp05, Prp06, Prp07, Prp08, Prp09], // PRP mobile
	};

	const isCurrentImageMobile = () => {
		const currentImages = mobileImagesMap[currentProjectIndex];
		if (!currentImages || !currentImage()) return false;

		return currentImages.includes(currentImage() as string);
	};

	const getImageClassName = () => {
		return isCurrentImageMobile() ? 'home__image--mobile' : 'home__image--desktop';
	};

	const contextValue = {
		currentProjectIndex,
		setCurrentProject,
		currentTitle: titles[currentProjectIndex],
		currentColorOrb,
		currentInformationLabel: informationLabels[currentProjectIndex],
		onClickImage,
		currentImage: currentImage(),
		imageClassName: getImageClassName(),
	};

	return <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>;
}
