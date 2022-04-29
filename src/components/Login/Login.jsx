import React from "react";
import "./Login.scss";
import loginImg from "../../assets/img/login.png";
import { useRef, useEffect, useState } from "react";
import Button from "./Button";
import girl from '../../assets/svg/girl.svg'
const Login = () => {
  //USERNAME
  const [username, setUsername] = useState("");
  const [errorUser, setErrorUSer] = useState("");
  const userRef = useRef();
  useEffect(() => {
    if (!username.trim()) setErrorUSer("Username required");
    else setErrorUSer("");
  }, [username]);

  //EMAIL
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  useEffect(() => {
    if (!emailRef.current.value) setErrorEmail("Email required");
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      setErrorEmail("Email address is invalid");
    else setErrorEmail("");
  }, [email]);

  //PASSWORD
  const passRef1 = useRef();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (!passRef1.current.value) setError("Password doesn't be empty");
    else if (password.length < 6)
      setError("Password needs to be 6 characters or more");
    else setError("");
  }, [password]);

  //CONFIRM PASSWORD
  const passRef2 = useRef();
  const [password2, setPassword2] = useState("");
  const [error2, setError2] = useState("");
  useEffect(() => {
    if (!password2) {
      setError2("Password is requared");
    } else if (password2 !== passRef1.current.value) {
      setError2("Passwords do not match");
    } else setError2("");
  }, [password2]);

  //BUTTON
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    if(!error){
      setLoading(true);
      const timeOut = setTimeout(() => {
      setLoading(false);
      setIsSucces(true)
      clearTimeout(timeOut);
    }, 2000);
    }
  };
  //SUCCESS
  const [isSucces, setIsSucces] = useState(false);

  return (
    <div className='container'>
      { isSucces ? ( 
        <img className='girl' src={girl} alt=""
       /> 
      ) : (
        <>
            <div className="base">
              <div className="base__block">
                <h1 className="title">Registration</h1>
                <div className="content">
                  <div className="image">
                    <img src={loginImg} />
                  </div>

                  <form className="form">
                    <div className="form__group">
                      <label htmlFor="username">Username</label>
                      <input
                        disabled={loading}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        ref={userRef}
                        type="text"
                        name="username"
                        placeholder="Username"
                        autoComplete="off"
                      />
                      <span className="form__group__text">{errorUser}</span>
                    </div>

                    <div className="form__group">
                      <label htmlFor="email">Email</label>
                      <input
                        disabled={loading}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        ref={emailRef}
                        type="text"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                      />
                      <span className="form__group__text">{errorEmail}</span>
                    </div>

                    <div className="form__group">
                      <label htmlFor="password">Password</label>
                      <input
                        disabled={loading}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        ref={passRef1}
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                      />
                      <span className="form__group__text">{error}</span>
                    </div>

                    <div className="form__group">
                      <label htmlFor="password2">Confirm Password</label>
                      <input
                        disabled={loading}
                        onChange={(e) => {
                          setPassword2(e.target.value);
                        }}
                        ref={passRef2}
                        type="password"
                        name="password2"
                        placeholder="Password"
                        autoComplete="off"
                      />
                      <span className="form__group__text">{error2}</span>
                    </div>
                  </form>
                </div>

                <div className="footer">
                  <Button
                    onClick={handleClick}
                    isLoading={loading}
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
        </>
      )
      }
    </div>
  );
};

export default Login;
