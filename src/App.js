import React from 'react'
import './App.css'
import Header from "./components/Header/Header";

import {BrowserRouter,Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import Genres from "./components/Genres/Genres";
import NewGenre from './components/NewGenre/NewGenre';
import EditGenre from './components/EditGenre/EditGenre';
import Series from './components/Series/Series';
import NewSeries from './components/NewSeries/NewSeries';
import InfoSerie from './components/InfoSerie/InfoSerie';
function App() {

  
  return (
    <BrowserRouter>
      <div className = 'app' >
        
          <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route exact path ='/genres' component = {Genres}/>
            <Route path ='/genres/new' component = {NewGenre}/>
            <Route path ='/genres/:id' component = {EditGenre}/>
            <Route exact path ='/series' component = {Series}/>
            <Route exact path ='/series/new' component = {NewSeries}/>
            <Route exact path ='/series/:id' component = {InfoSerie}/>
          </Switch>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
