import React from "react";
import { Switch, Route } from "react-router-dom";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";
import "./style/style.css";

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' component={SongList} />
        <Route path='/songs/new' component={SongCreate} />
        <Route path='/songs/:id' component={SongDetail} />
      </Switch>
    </div>
  );
};

export default App;
