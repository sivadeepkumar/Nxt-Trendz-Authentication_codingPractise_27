import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errormsg: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitError = errorMsg => {
    console.log(errorMsg)
    this.setState({errormsg: errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      //  console.log(data.error_msg)
      this.onSubmitError(data.error_msg)
    }

    this.setState({username: '', password: ''})
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="inputId">USERNAME</label>
        <br />
        <input
          className="input-el"
          id="inputId"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUserName}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="passwordId">PASSWORD</label>
        <br />
        <input
          className="password-el"
          id="passwordId"
          type="password"
          placeholder="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {errormsg} = this.state
    return (
      <div className="main-container">
        <div>
          <img
            className="website-login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <div>
          <form className="form-element" onSubmit={this.submitForm}>
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <div>{this.renderUserName()}</div>
            <div>{this.renderPassword()}</div>
            {errormsg !== '' ? <p className="error-msg">*{errormsg}</p> : null}
            <button className="btn1" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
