import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
require('default-passive-events')

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
