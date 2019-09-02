import React from 'react'

export class Example extends React.Component {
  render(){
    return (
      <div>Nothing to see here yet</div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default withRouter(connect(
  null,
  null
)(Example))
