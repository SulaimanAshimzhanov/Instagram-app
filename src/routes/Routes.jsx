

import Aos, { refresh } from 'aos';
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Routers } from '../pages';
import { Apps } from '../services/path';
import "aos/dist/aos.css";
import { Components } from '../components';
import { REQUEST } from '../api';
import { Providers } from '../providers';

export default function Routes() {
  const { refresh } = Providers.useAuth();
  const [render, setRender] = React.useState(0);

  React.useEffect(() => {
     Aos.init({
      duration:1000
     });
  }, []);

  React.useEffect(() => {
    const newData = {
      refresh: refresh
    }
    REQUEST.REFRESH_TOKEN(newData)
      .then(res => {
        localStorage.setItem("access", res.data.access);
      })

      setInterval(() => {
        setRender(prev => prev + 1)
      }, 120000);
  }, [refresh, render]);

  return (
    <React.Fragment>
        <React.Suspense fallback={<Components.Loader fullHeight={"100vh"}/>}>
            <Switch>
                <Route path={Apps.accounts} element={<Routers.AuthRoutes/>}/>
                <Route path={Apps.layout} element={<Routers.LayoutRoutes/>}/>
            </Switch>
        </React.Suspense>
    </React.Fragment>
  )
}
