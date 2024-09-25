import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showError: true, errorMsg})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDeatils = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDeatils),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => this.setState({password: event.target.value})

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showError, errorMsg, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    

    return (
      <div className="login-bg-container">
        <div className="login-container">
          <form className="login-form" onSubmit={this.onClickLogin}>
            <h1 className="login-heading">Todo List</h1>
            <div className="input1-card">
              <label htmlFor="username" className="login-label">
                USERNAME
              </label>
              <input
                value={username}
                onChange={this.onChangeUsername}
                id="username"
                className="login-input"
                type="text"
              />
            </div>
            <div className="input1-card">
              <label htmlFor="password" className="login-label">
                PASSWORD
              </label>
              <input
                value={password}
                onChange={this.onChangePassword}
                id="password"
                className="login-input"
                type={showPassword ? 'text' : 'password'}
              />
            </div>
            <div className="input1-card">
              <input
                onChange={this.onShowPassword}
                id="showPassword"
                type="checkbox"
              />
              <label htmlFor="showPassword" className="login-label">
                Show Password
              </label>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {showError && <p className="login-error">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
