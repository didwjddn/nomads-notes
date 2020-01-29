import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Notes from '../../Routes/Notes';
import Add from '../../Routes/Add';
import Edit from '../../Routes/Edit';
import Note from '../../Routes/Note';


function App() {
  return (
   <BrowserRouter>
   <Switch>

     <Route exact={true} path={"/"} component = {Notes}/>
     <Route path={"/add"} component = {Add}/>
     <Route path={"/note/:id"} component = {Note}/>
     <Route path={"/edit/:id"} component = {Edit}/>

   </Switch>
   </BrowserRouter>

  );
}

export default App;
