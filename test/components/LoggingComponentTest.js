import React from 'react';
import {shallow} from 'enzyme';
import LoggingComponent from '../../src/components/LoggingComponent';
describe('LoggingComponent', () => {
  it('renders', () => {
    const connection = {
      disconnectReason: null,
      playerId: null,
      players: null,
      status: 'connected',
    };
    expect(shallow(
        <LoggingComponent connection={connection}
                          onDisconnectClick={sinon.stub()}
                          onConnectClick={sinon.stub()}
        />,
    )).to.exist;
  });
  it('renders connecting when status connecting', () => {
    const connection = {
      disconnectReason: null,
      playerId: null,
      players: null,
      status: 'connecting',
    };
    expect(shallow(
        <LoggingComponent connection={connection}
                          onDisconnectClick={sinon.stub()}
                          onConnectClick={sinon.stub()}
        />,
    )).to.include.text('Connecting...');
  });
  it('has one button and one input when status disconnected', () => {
    const connection = {
      disconnectReason: null,
      playerId: null,
      players: null,
      status: 'disconnected',
    };
    const loggingComponent = shallow(
        <LoggingComponent connection={connection}
                          onDisconnectClick={sinon.stub()}
                          onConnectClick={sinon.stub()}
        />,
    );
    expect(loggingComponent,
    ).to.have.exactly(1).descendants('input');
    expect(loggingComponent,
    ).to.have.exactly(1).descendants('button');
  });

  it('render error when status disconnected and disconnectReason is not null',
      () => {
        const connection = {
          disconnectReason: 'error',
          playerId: null,
          players: null,
          status: 'disconnected',
        };
        const loggingComponent = shallow(
            <LoggingComponent connection={connection}
                              onDisconnectClick={sinon.stub()}
                              onConnectClick={sinon.stub()}
            />,
        );
        expect(loggingComponent,
        ).to.include.text('Player name is already taken. Try a different name');
        expect(loggingComponent,
        ).to.have.exactly(1).descendants('input');
        expect(loggingComponent,
        ).to.have.exactly(1).descendants('button');
      });

  it('render input and button when status disconnected and disconnectReason is null',
      () => {
        const connection = {
          disconnectReason: null,
          playerId: null,
          players: null,
          status: 'disconnected',
        };
        const loggingComponent = shallow(
            <LoggingComponent connection={connection}
                              onDisconnectClick={sinon.stub()}
                              onConnectClick={sinon.stub()}
            />,
        );
        expect(loggingComponent,
        ).to.have.exactly(1).descendants('input');
        expect(loggingComponent,
        ).to.have.exactly(1).descendants('button');
      });

  it('has one button when status connected', () => {
    const connection = {
      disconnectReason: null,
      playerId: null,
      players: null,
      status: 'connected',
    };
    const loggingComponent = shallow(
        <LoggingComponent connection={connection}
                          onDisconnectClick={sinon.stub()}
                          onConnectClick={sinon.stub()}
        />,
    );
    expect(loggingComponent,
    ).to.have.exactly(1).descendants('button');
  });
  it('clear state when connect button clicked', () => {
    const connection = {
      disconnectReason: null,
      playerId: null,
      players: null,
      status: 'connected',
    };
    const loggingComponent = shallow(
        <LoggingComponent connection={connection}
                          onDisconnectClick={sinon.stub()}
                          onConnectClick={sinon.stub()}
        />,
    );
    loggingComponent.setState({name: 'bla'});
    loggingComponent.find('button').simulate('click');
    expect(loggingComponent.state()).to.eql({name: ''});
  });
  it('disconnected button calls once', () => {
    const connection = {
      disconnectReason: null,
      playerId: null,
      players: null,
      status: 'connected',
    };
    const onDisconnect = sinon.spy();
    const loggingComponent = shallow(
        <LoggingComponent connection={connection}
                          onDisconnectClick={onDisconnect}
                          onConnectClick={sinon.stub()}
        />,
    );
    loggingComponent.find('button').simulate('click');
    expect(onDisconnect).to.have.property('callCount', 1);
  });

  it('connecting button calls once', () => {
    const connection = {
      disconnectReason: null,
      playerId: null,
      players: null,
      status: 'disconnected',
    };
    const onConnect = sinon.spy();
    const loggingComponent = shallow(
        <LoggingComponent connection={connection}
                          onDisconnectClick={sinon.stub()}
                          onConnectClick={onConnect}
        />,
    );
    loggingComponent.find('button').simulate('click');
    expect(onConnect).to.have.property('callCount', 1);
  });
  it('clear state when disconnected button clicked', () => {
    const connection = {
      disconnectReason: null,
      playerId: null,
      players: null,
      status: 'connected',
    };
    const loggingComponent = shallow(
        <LoggingComponent connection={connection}
                          onDisconnectClick={sinon.stub()}
                          onConnectClick={sinon.stub()}
        />,
    );
    loggingComponent.setState({name: 'bla'});
    loggingComponent.find('button').simulate('click');
    expect(loggingComponent.state()).to.eql({name: ''});
  });
});

