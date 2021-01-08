import React, { Component } from 'react'
// import Text from 'react'
import { Link } from 'react-router-dom'
import '../Login.css'
import perimg from '../personal-img.jpg'

class Information extends Component {
    render() {
        return (
            <div>
                <div className="infor-agileits">
                    <div className="form-w3-agile">
                        <div className="main-infor">
                            <h2>Thông tin</h2>
                            <div className="personal-infor">
                                <img src={perimg} alt="personal-view" className="personal-img"/>
                                <div className="infor">
                                    <h4>Designer / Web Developer</h4> <hr/>
                                    <table>
                                        <tr>
                                            <td>Họ và tên:</td>
                                            <td>Nguyễn Thanh Tú</td>
                                        </tr>
                                        <tr>
                                            <td>Ngày sinh:</td>
                                            <td>18 / 07 / 2000</td>
                                        </tr>
                                        <tr>
                                            <td>Số điện thoại:</td>
                                            <td>012.345.6789</td>
                                        </tr>
                                        <tr>
                                            <td>Địa chỉ:</td>
                                            <td>118, Tân Tiến, Kiến Xương, Thái Bình</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td>tu.nt184002@sis.hust.edu.vn</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="social w3layouts">
                                <div className="head-another-contact">Thông tin liên lạc khác: <br/></div>
                                <div className="icons">
                                    <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i> </a>
                                    <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i> </a>
                                    <a href="/"><i className="fa fa-pinterest-p" aria-hidden="true"></i> </a>
                                    <a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i> </a>
                                <div className="clear"></div>
                                </div>
                            </div>
                        </div>

                        <Link to={ localStorage.getItem('user') === 'true' ? "/" : "/login"}>
                            <button type="submit" className="btn btn-primary">
                                Về trang chủ
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Information;