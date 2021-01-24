import React from "react";
import * as Setting from "../../constants/Setting";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useCookies, removeCookie } from "react-cookie";
import { Link } from "react-router-dom";
import * as ApiCaller from './../../helpers/index';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useCookies([""]);
  const [cookies, setCookie, removeCookie] = useCookies([""]);

  let history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data)
    let url = "api/auth/login";
    console.log(url)
    await ApiCaller.login(url, data)
      .then((res) => {
        console.log(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card-group">
            <div className="card p-4">
              <div className="card-body">
                <h1>Đăng nhập</h1>
                <p className="text-muted">Đăng nhập vào hệ thống</p>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <svg className="c-icon">
                          <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-user" />
                        </svg>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      type="email"
                      required
                      placeholder="Tài khoản"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <svg className="c-icon">
                          <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                        </svg>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      type="password"
                      required
                      placeholder="Mật khẩu"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-4"></div>
                  <div className="input-group mb-4"></div>
                  <div className="input-group mb-3"></div>
                  <div className="input-group mb-3"></div>
                  <div className="input-group mb-3"></div>
                  <div className="input-group mb-3"></div>
                  <div className="row">
                    <div className="col-6">
                      <button className="btn btn-primary px-6" type="submit">
                        Đăng nhập
                      </button>
                    </div>
                    <div className="col-6">
                      <Link to="/signup">Chưa có tài khoản?</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card text-white bg-primary py-5 d-md-down-none" style={{ width: "44%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
