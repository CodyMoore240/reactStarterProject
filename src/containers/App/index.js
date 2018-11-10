import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

//import styles
import 'assets/styles/base.module.scss'

export class App extends React.Component {
  componentDidMount() {
    //watch for changes in user auth
    // this.props.runAuth()
  }

  render(){
    //store the content we want to render in a var so we can render it dynamically
    let content = <div>Hello World</div>
    
    //if we are done wating on auth then we need to render something other than the loading screen
    // if(!this.props.authentication.waiting) {
    //   //is the user logged in?
    //   if (!this.props.authentication.userLoggedIn) {
    //     // content = <Login></Login>
    //   } else {
    //     // content = <LoggedIn></LoggedIn>
    //   }
    // }

    return (content)
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(App))