import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const onLoginSucces = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  const onClickLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userObj = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userObj),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    if (response.ok) {
      onLoginSucces(jwtToken)
    }
  }

  const token = Cookies.get('jwt_token')
  return token !== undefined ? (
    <Redirect to="/" />
  ) : (
    <div className="loginContainer">
      <h1> Please Login </h1>
      <button onClick={onClickLogin} type="button" className="login-button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
