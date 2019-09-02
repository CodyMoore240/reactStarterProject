import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

//import components
import Base from 'components/Base'

export class App extends React.Component {
  render(){
    return (
      <Base></Base>
    )
  }
}

// const mapStateToProps = state => ({

// })

// const mapDispatchToProps = dispatch => bindActionCreators({

// }, dispatch)

export default connect(
  null,
  null
)(App)
