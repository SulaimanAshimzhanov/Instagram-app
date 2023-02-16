

import Aos from 'aos';
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Routers } from '../pages';
import { Apps } from '../services/path';
import "aos/dist/aos.css";

export default function Routes() {

  React.useEffect(() => {
     Aos.init({
      duration:1000
     });
  }, []);

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
