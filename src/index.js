import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'store'
import App from 'containers/App'

const renders = Component => {
  return render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
}

renders(App)

if (module.hot) {
  module.hot.accept('containers/App', () => {
    const NextApp = require('containers/App').default
    renders(NextApp)
  })
}