import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
// import whyDidYouUpdate from 'why-did-you-update'
import store from 'store'
import 'assets/styles/base.module.scss'

//import containers
import App from 'containers/App'

//whydidyouupdate
// whyDidYouUpdate(React)

const renders = () => {
  return render( 
    <Provider store={store}>
      <Router>
        <App /> 
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

renders(App)

//Hot Module Reloading
if (module.hot) {
  module.hot.accept('containers/App', () => {
    const NextApp = require('containers/App').default
    renders(NextApp)
  })
}