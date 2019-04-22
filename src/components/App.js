import React from 'react';
import {Router, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import browserHistory from '../history';

const App = ()=>{
  return (
    <div className='ui container'>
      <Router history={browserHistory}>
        <Header />  
        <div>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          <Route path='/streams/show' exact component={StreamShow} />
          <Route path='/streams/delete/:id' exact component={StreamDelete} />
        </div>
      </Router>
    </div>)
}
export default App;

//530995356834-4ruj6khbmt57ektbcs2jseoecordoo74.apps.googleusercontent.com
