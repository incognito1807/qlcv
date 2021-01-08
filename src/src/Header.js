import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Header = () => {
    if(localStorage.getItem('user') === 'false') return (<div className="noHeader">1</div>)
    else return (
        <nav>
            <h4 className="col-xs-9 col-sm-9 col-md-9 col-lg-9">Logo</h4>
            <Link to="/">
                <h4 className="col-xs-1 col-sm-1 col-md-1 col-lg-1">Trang chủ</h4>
            </Link>
            <Link to={ localStorage.getItem('user') === 'true' ? "/thongtin" : "/" }>
                <h4 className="col-xs-1 col-sm-1 col-md-1 col-lg-1">Thông tin</h4>
            </Link>
            <Link to="/logout">
                <h4 className="col-xs-1 col-sm-1 col-md-1 col-lg-1">Đăng xuất</h4>
            </Link>
        </nav>
    );
}

export default Header;