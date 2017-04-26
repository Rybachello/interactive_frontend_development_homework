import React, { Component } from 'react'

//todo: rename
class InputComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.setState = this.setState.bind(this)
    console.log(props)
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

        );
      case 'connected':
        return (
          <div>
            <button className="connect-player-button"
                    onClick={() => this.props.onDisconnectClick(this.state.name)}>Disconnect
            </button>
          </div>
        );
      case 'disconnected':
        return (
          <div className='input-name-form'>
            <h4>{this.props.connection.disconnectReason ? `${this.props.connection.disconnectReason}` : ``}</h4>
            <div>
              <input type='text'
                     placeholder='Enter name'
                     value={this.state.name}
                     onChange={this.handleNameChange.bind(this)}
              />
            </div>
            <button className="connect-player-button"
                    onClick={() => this.props.onConnectClick(this.state.name)}>Connect
            </button>
          </div>
        );
    }
  };
}
  // //todo:convert to switch
  // if (props.status == 'connecting') {
  //   return (
  //     <div>
  //       <h2>Connecting...</h2>
  //     </div>
  //   )
  // }
  // // if (props.status == 'connect') {
  // //     return(
  // //
  // //     );
  // // }
  // if (props.status == 'disconnected') {
  //   return (
  //     <div>
  //       <InputNameForm onNameSubmit={(name) => props.onNameSubmit(name)}/>
  //       <button className="number-game-button" type="number-game"
  //               onClick={() => props.onConnectClick()}>Connect!
  //       </button>
  //     </div>
  //   )
  // }

// InputApp.propTypes = {
//     status: React.PropTypes.string.isRequired
// };
export default InputComponent