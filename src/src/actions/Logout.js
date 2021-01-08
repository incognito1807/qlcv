import React from 'react'
import {Redirect} from 'react-router-dom';

const Logout = () => {
    localStorage.setItem('user', false);
    return <Redirect to='/login' />
}

export default Logout