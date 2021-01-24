import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Auth = () => {
  const [data, setData] = useState({ username: '', email: '', type: 0, password: ''})
  const [isSubmit, setIsSubmit] = useState(true)

  const handleInput = ( e ) => {
    setData( data => ( { ...data, [e.target.name]: e.target.value } ) );
    console.log(data);
  }

  useEffect( () => {
    if ( data.username && data.email && data.type && data.password ) {
      setIsSubmit(false);
    }else{
      setIsSubmit(true);
    }
  }, [data])

  const handleSubmit = ( e ) => {
    e.preventDefult();
    console.log('data', data);
  }

  return (
    <div className="auth">
      <div className="auth__left">
        <div className="auth__form">
          <h2 className="title">Let's set up your account</h2>
          <span className="auth__noted">
            Already have an account? <Link to="/"><b>Sign in</b></Link>
          </span>
          <form className="form" id="form_auth" onSubmit={handleSubmit}>
            <div className="form__item">
              <input type="text" name="username" id="username" className="form__input" value={data.username} onChange={handleInput} />
              <label htmlFor="username" className={data.username ? 'form__label form__label--filled' : 'form__label'}>Your name</label>
              <span className="form__notif form__notif--error">Please enter your name</span>
            </div>
            <div className="form__item">
              <input type="email" name="email" id="email" className="form__input" value={data.email} onChange={handleInput} />
              <label htmlFor="email" className={data.email ? 'form__label form__label--filled' : 'form__label'}>Email address</label>
              <button className="form__notif form__notif--error">Please enter a valid email address</button>
            </div>
            <div className="form__item">
              <select name="type" id="type" className="form__input" defaultValue={data.type} onChange={handleInput} >
                <option value="1">I would describe my user type as</option>
                <option value="2">Digital Marketing</option>
                <option value="3">Legal</option>
                <option value="4">Developer</option>
              </select>
            </div>
            <div className="form__item">
              <input type="password" name="password" id="password" className="form__input" value={data.password} onChange={handleInput} />
              <label htmlFor="password" className={data.password ? 'form__label form__label--filled' : 'form__label'}>Password</label>
              <span className="form__notif">Minimum 8 characters</span>
              <span className="form__toggle-type"><i className="icon-eye"></i></span>
            </div>
            <div className="form__item">
              <input type="submit" name="submit" className="button button--full" value="Next" disabled={isSubmit} />
            </div>
          </form>
          <span className="auth__agree">
            By clicking the "Next" button, you agree to creating a free account, and to <Link to="/"><b>Terms of Service</b></Link> and <Link to="/"><b>Privacy Policy.</b></Link>
          </span>
        </div>
      </div>
      <div className="auth__right">
        <div className="auth__caption">
          <h1 className="title">Dummy Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do euismod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
