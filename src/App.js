import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SongList} />
          <Route path='/create-song' component={SongCreate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
