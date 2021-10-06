import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/pages/Page404';
import Register from '../User/Register';
import UpdateProfile from '../User/UpdateProfile';
import UpdatePassWord from '../User/AuthUpdate';
import Login from '../User/Login';
import Logout from '../User/Logout';
import Grid from '@material-ui/core/Grid';
import SwithingSearch from '../components/SwithingSerach';
import MainGmaps from '../gmaps_parts/UseGoogleMapAPI';
import GmapFlagContext from '../components/context/GmapFlagContext';
import Header from '../components/Header';
import GmapsContext from '../components/context/GmapsContext';
import { Gmap } from '../components/interface/Gmap';

export const Router: React.FC = () => {
  const [gflag, setGmapFlag] = useState<boolean>(false);
  const [gmaps, setGmaps] = useState<Gmap[]>([]);

  return (
    <div className="wrap-grid">
      {/* <RecoilRoot> */}
      <GmapFlagContext.Provider value={{ gflag, setGmapFlag }}>
          <Grid container direction="row" spacing={4}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Switch>
              <Route exact path="/">
                <Grid container direction="column" spacing={4}>
                <GmapsContext.Provider value={{ gmaps, setGmaps }}>
                  <Grid item xs={8}>
                    <MainGmaps />
                  </Grid>
                  <Grid item xs={4}>
                    <SwithingSearch />
                  </Grid>
                </GmapsContext.Provider>
                </Grid>
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/update_profile">
                <UpdateProfile />
              </Route>
              <Route exact path="/update_passwd">
                <UpdatePassWord />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/logout">
                <Logout />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Grid>
      </GmapFlagContext.Provider>
      {/* </RecoilRoot> */}
    </div>
  );
};
export default React.memo(Router);
