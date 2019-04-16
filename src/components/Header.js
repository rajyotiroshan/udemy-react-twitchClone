import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

/**
 * Header for the website(App)
 */
 const Header = ()=>{
     return (<div className="ui secnadary pointing menu">
            <Link className="item" to="/">
                Streamy
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                all Streams</Link>
                <GoogleAuth />
            </div>
     </div>)
 }
 export default Header;