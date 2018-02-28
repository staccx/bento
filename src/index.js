import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import ApiStore from './stores/apiStore'
import { Provider } from 'mobx-react'

const apiStore = new ApiStore()
apiStore.getResult()
ReactDOM.render(<Provider apiStore={apiStore}>
  <App/>
</Provider>, document.getElementById('root'))
registerServiceWorker()
