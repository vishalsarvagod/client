import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">Streamer</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
                <GoogleAuth></GoogleAuth>
            </div>
        </div>
    );
};

export default Header;


//key= '312689023447-i0mbqcesifrifp7bsoa5hjatfesfl3i6.apps.googleusercontent.com';