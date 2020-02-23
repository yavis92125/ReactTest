import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Croptomize from '../container/croptomize'

export default function MainRoute() {
  return (
    <Switch>
      <Route exact path="/" component={Croptomize} />
    </Switch>
  )
}
