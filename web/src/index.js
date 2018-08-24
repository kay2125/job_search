import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './stylesheets/style.scss'

//components
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
