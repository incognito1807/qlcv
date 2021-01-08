import React from 'react'
import {Redirect} from 'react-router-dom';
import '../Login.css'

// add sự kiện submit login form 
// khi name và pass đúng => sử dụng localStorage để set giá trị user = true
const onLogin = () => {
  const name = document.getElementById('userName').value
  const pass = document.getElementById('passWord').value
  if((name === 'tu.nt184002') && (pass === '20184002')){
    return localStorage.setItem('user', true)
  }
}

const Login = () => {
 // lấy user từ trong localStorage nếu == 'true' thì sẽ Redirect. Còn không sẽ ở trang Login
  if(localStorage.getItem('user') === 'true'){
    return <Redirect to='/home' />
  }
  return (
    <div className="d-flex justify-content-center">
      <h1 className="topHeader">Quản lý công việc</h1>
      <div className="main-agileits">
        <div className="form-w3-agile">
          <h2>Welcome Back</h2>
          <form onSubmit={onLogin}>
            <div className="form-sub-w3">
              <input type="text" name="Username" placeholder="Username " required="" id = "userName"/>
              <div className="icon-w3">
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
            </div>

            <div className="form-sub-w3">
              <input type="password" name="Password" placeholder="Password" required="" id = "passWord"/>
              <div className="icon-w3">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
              </div>
            </div>

            <p className="p-bottom-w3ls"><a className href="/">Forgot Password?</a></p>
            <p className="p-bottom-w3ls1"><a className href="/">New User?</a></p>
            <div className="clear"></div>
            <div className="submit-w3l">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>

          <div className="social w3layouts">
            <div className="heading">
              <h5>Or Login with</h5>
              <div className="clear"></div>
            </div>
            <div className="icons">
              <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i> </a>
              <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i> </a>
              <a href="/"><i className="fa fa-pinterest-p" aria-hidden="true"></i> </a>
              <a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i> </a>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login