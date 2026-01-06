import { ReactComponent as LinkedinIcon } from './assets/icons/linkedin_icon.svg';
import { ReactComponent as EmailIcon } from './assets/icons/mail_icon.svg.svg';

import { StyledEngineProvider } from '@mui/material';

import Home from './Pages/Home';

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<Home />
		</StyledEngineProvider>
	);
}

export default App;
