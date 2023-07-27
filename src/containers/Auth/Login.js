import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { handleLoginApi } from '../../services/userService';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isShowPassword: false,
      errorMessage: '',
    };
  }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  }

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

  handleLogin = async () => {
    this.setState({
      errorMessage: ''
    });

    try {
      const { username, password } = this.state;
      const data = await handleLoginApi(username, password);
      console.log(data);

      if (data && data.errCode !== 0) {
        this.setState({
          errorMessage: data.message
        });
      }

      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
        console.log('Login success');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errorMessage: error.response.data.message
          });
        }
      }
      console.log('Error message', error.response);
    }
  }

  handleShowHidePassword = () => {
    this.setState((prevState) => ({
      isShowPassword: !prevState.isShowPassword,
    }));
  }

  render() {
    const { username, password, isShowPassword, errorMessage } = this.state;

    return (
      <div className="login-background">
        <div className="login-container">
          <div className="col-12 text-login">Login</div>
          <div className="col-12 form-group">
            <label>Username:</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your username"
              value={username}
              onChange={this.handleOnChangeUsername}
            />
          </div>
          <div className="col-12 form-group">
            <label>Password:</label>
            <div className="custom-input-password">
              <input 
                type={isShowPassword ? 'text' : 'password'} 
                className="form-control" 
                placeholder="Enter your password"
                value={password}
                onChange={this.handleOnChangePassword}
              />
              <span onClick={this.handleShowHidePassword}>
                <i className={isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
              </span>
            </div>
          </div>
          {errorMessage && (
            <div className="col-12" style={{ color: 'red' }}>
              {errorMessage}
            </div>
          )}
          <button onClick={this.handleLogin}>Login</button>
          <div className="col-12">
            <span>Forgot your password?</span>
          </div>
          <div className="col-12">
            <span className="text-center">Or login with:</span>
          </div>
          <div className="col-12 social-login">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-google-plus-g"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
