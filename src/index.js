import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './global-styles';
import { ContextProvider } from './global-context';

ReactDOM.render(
		<ContextProvider>
			<Router>
				<GlobalStyles />
				<App />
			</Router>
		</ContextProvider>,
	document.getElementById('root')
);
