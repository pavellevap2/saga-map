import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import { Provider } from 'react-redux'
import store, { sagaMiddleware } from './configureStore'
import rootSaga from './sagas'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body{
    padding:0;
    margin:0;
  },
  div{
    padding:0;
    margin:0;
  }
`

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
)
