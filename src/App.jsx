import './App.css'

import Amplify from 'aws-amplify'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import awsconfigdev from './aws-exports-dev'
import MainRoute from './route/route'
import AppHeader from './layout/AppHeader'
import MobileHeader from './layout/MobileHeader'
import ResizeDetector from 'react-resize-detector'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

Amplify.configure(awsconfigdev)


function App() {
  const store = createStore(applyMiddleware(thunkMiddleware))

  return (
    <Provider store={store}>
      <ResizeDetector
        handleWidth
        render={({ width }) => (
          <BrowserRouter>
            {width < 1250 ? <MobileHeader /> : <AppHeader />}
            <MainRoute />
          </BrowserRouter>
        )}
      />
    </Provider>
  )
}

export default App
