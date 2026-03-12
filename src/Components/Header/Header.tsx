import { useMediaQuery } from '@mui/material';

import './Header.scss';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export default function Header() {
	const isMobile = useMediaQuery('(max-width: 1024px)');

	return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
}
