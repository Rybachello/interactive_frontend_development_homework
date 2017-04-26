import React, { Component } from 'react'

//todo: rename
class InputComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.setState = this.setState.bind(this)
  }

  handleNameChange (event) {
    this.setState({name: event.target.value})
  }

  render () {
    switch (this.props.connection.status) {
      case 'connecting':
        return (
          <div>
            <h2>Connecting...</h2>
          </div>

        )
      case 'connected':
        return (
          <div>
            <button className='connect-button'
                    onClick={() => {
                      this.props.onDisconnectClick()
                      this.setState({name: ''})
                    }}>Disconnect
            </button>
          </div>
        )
      case 'disconnected':
        if (this.props.connection.disconnectReason) {
          return (
            <div className='disconnect-name-form'>
              <h4>Player name is already taken. Try a different name</h4>
              <div>
                <input type='text'
                       placeholder='Enter name'
                       value={this.state.name}
                       onChange={this.handleNameChange.bind(this)}
                />
              </div>
              <button className='connect-button'
                      onClick={() => {
                        this.props.onConnectClick(this.state.name)
                        this.setState({name: ''})
                      }}>Connect
              </button>
            </div>
          )
        } else {

          return (
            <div className='connect-name-form'>
              <div>
                <input type='text'
                       placeholder='Enter name'
                       value={this.state.name}
                       onChange={this.handleNameChange.bind(this)}
                />
              </div>
              <button className='connect-button'
                      onClick={() => {
                        this.props.onConnectClick(this.state.name)
                        this.setState({name: ''})
                      }}>Connect
              </button>
            </div>
          )
        }
    }
  };
}
// InputApp.propTypes = {
//     status: React.PropTypes.string.isRequired
// };
export default InputComponent