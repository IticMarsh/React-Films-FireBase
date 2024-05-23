import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/welcome';

const App = () => {
  return (
    <Router>
     
        <Route exact path="/">
          <Welcome/>
        </Route>
        <Route exact path="/movies/list">
          <MovieList />
        </Route>
        <Route exact path="/movies/add">
          <AddMovie />
        </Route>
    </Router>
  );
};

export default App;