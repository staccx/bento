import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApiStore from './stores/apiStore'

const apiStore = new ApiStore()
apiStore.getResult()
ReactDOM.render(<App apiStore={apiStore}/>, document.getElementById('root'));
registerServiceWorker();
