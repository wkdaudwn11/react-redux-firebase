import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { ToastContainer, Zoom } from 'react-toastify'
import firebase from 'firebase/app'
import * as alerts from '../utils/alerts';

import Home from './Home'
import Posts from './Posts'
import HeaderNav from './common/HeaderNav'
import SignUp from './auth/SignUp'
import "./assets/styles/app.scss"
import * as authActions from './actions/auth'


class App extends React.Component {

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.changeAuth(true)
      } else {
        this.props.changeAuth(false)
      }
    })
  }

  handleLogout = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            this.props.changeAuth(false)
            alerts.success('Successfully logged out!')
        })
        .catch(error => {
            alerts.error(error.message)
        })
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        <HeaderNav isAuthed={auth} handleLogout={this.handleLogout}/>
        <section className="app-wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/signup" component={SignUp} />
        </section>
        <ToastContainer autoClose={false} transition={Zoom} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, authActions)(App)