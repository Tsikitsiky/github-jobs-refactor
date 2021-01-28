import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
		<Router>
			<GlobalStyles />
			<App />
		</Router>,
	document.getElementById('root')
);
