import React from 'react'
import { observer } from 'mobx-react-lite'
import { Router, Switch, Route } from 'react-router'
import history from '~/history'

import Block from './Blocks'
import Navigation from './Navigation'

export default observer(() => {
  return (
    <Router history={history}>
      <Navigation>
        <Switch>
          <Route path="/" extra component={Block}></Route>
        </Switch>
      </Navigation>
    </Router>
  )
})
