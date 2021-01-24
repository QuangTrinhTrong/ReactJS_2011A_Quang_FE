import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import * as ApiCaller from "./../../helpers/index";
import axios from "axios";
import * as Setting from "./../../constants/Setting";
import { useCookies } from "react-cookie";
function Login(props) {
  const [email, setEmail] = useState("khanhpoly@gmail.com");
  const [password, setPassword] = useState("123456");
  const [cookies, setCookie] = useCookies(['access_token', 'user_info', 'name_user']);

  let history = useHistory();

  function goRegister() {
    history.push("/register");
  }

  async function handelLogin(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const config = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = (await Setting.URL) + "api/auth/login";
    try {
      return axios(url, {
        method: "POST",
        data: data,
        config,
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.user.name);
            setCookie("access_token", res.data.access_token, { path: "/" });
            setCookie("user_info", res.data.user, { path: "/" });
            setCookie("name_user", res.data.user.name)
            //goi
            console.log(cookies.name_user)
            history.push("/");
          } else {
            alert("tài khoản hoặc mật khẩu không đúng");
          }
        })
        .catch((err) => {
          alert("tài khoản hoặc mật khẩu không đúng");
          console.log(err);
        });
    } catch (err) {
      alert("tài khoản hoặc mật khẩu không đúng");
      console.log(err);
    }
  }

  return (
    <div className="c-app flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body">
                  <h1>Login</h1>
                  {/* //start form */}
                  <form onSubmit={handelLogin}>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <svg className="c-icon">
                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-user" />
                          </svg>
                        </span>
                      </div>
                      <input
                        required
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
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
                        required
                        className="form-control"
                        value={password}
                        minLength="6"
                        maxLength="8"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button className="btn btn-primary px-4">Login</button>
                      </div>
                      <div className="col-6 text-right">
                        <button className="btn btn-link px-0" type="button">
                          Forgot password?
                        </button>
                      </div>
                    </div>
                    {/* end form */}
                  </form>
                </div>
              </div>
              <div
                className="card text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <div className="card-body text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button
                      onClick={goRegister}
                      className="btn btn-lg btn-outline-light mt-3"
                      type="button"
                    >
                      Register Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
