import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header'

const App = ()=>{
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />  
        <div>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit' exact component={StreamEdit} />
          <Route path='/streams/show' exact component={StreamShow} />
          <Route path='/streams/delete' exact component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>)
}
export default App;

//530995356834-4ruj6khbmt57ektbcs2jseoecordoo74.apps.googleusercontent.com
