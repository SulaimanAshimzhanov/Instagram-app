

import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Routers } from '../pages';
import { Apps } from '../services/path';

export default function Routes() {
  return (
    <React.Fragment>
        <React.Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                <Route path={Apps.accounts} element={<Routers.AuthRoutes/>}/>
            </Switch>
        </React.Suspense>
    </React.Fragment>
  )
}
