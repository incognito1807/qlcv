import React from "react";

const Footer = () => {
    if(localStorage.getItem('user') === 'false') return (<div className="noHeader">1</div>)
    else return (
        <div id="footer" className="footer">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <p>Công Ty A.B.C</p>
                <p>Địa chỉ: 118, khu Tân Tiến, thị trấn Kiến Xương, tỉnh Thái Bình <br/>
                Điện thoại: 012.345.6789</p>
                <p>Email: <a href="mailto:tu.nt184002@sis.hust.edu.vn">tu.nt184002@sis.hust.edu.vn</a></p>
            </div>

            <div className="icons-footer">
                <div className="icons">
                <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i> </a>
                <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i> </a>
                <a href="/"><i className="fa fa-pinterest-p" aria-hidden="true"></i> </a>
                <a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i> </a>
                <p className="copy-right">Copyright (c) 2021 Nguyễn Thanh Tú </p>
                <div className="clear"></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;