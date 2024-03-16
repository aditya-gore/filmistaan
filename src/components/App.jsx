/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes as Switch, Route } from 'react-router-dom';
import useAlan from './Alan';
import useStyles from './Styles';

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        {' '}
        {/* main div contains the main part of the application */}
        <div className={classes.toolbar} />
        <Switch>
          {' '}
          {/* a <Switch> looks through its children <Route>s and renders the first one that matches the current URL */}
          <Route exact path='/movie/:id' element={<MovieInformation />} />{' '}
          {/* notice: /:id <=> /<number> */}
          <Route exact path='/actors/:id' element={<Actors />} />
          <Route exact path='/*' element={<Movies />} />{' '}
          {/* notice: it's smart to use 'exact' */}
          <Route exact path='/approved' element={<Movies />} />
          <Route exact path='/profile/:id' element={<Profile />} />
        </Switch>
      </main>

      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
