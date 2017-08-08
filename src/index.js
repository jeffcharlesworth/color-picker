import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from './AppStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
