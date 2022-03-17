import React, { createContext, useEffect } from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { APP_URL_SOCKET } from 'config';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser, makeSelectUserToken } from 'containers/App/selectors';
import { socketOnTimeLine } from './socketTimeLine';

const WebSocketContext = createContext(null);

export { WebSocketContext };

function SocketContext({ dispatch, user, userToken, children }) {
  let socket;
  let ws;

  if (!socket) {
    socket = io(APP_URL_SOCKET, {
      withCredentials: true,
      forceNew: true,
      reconnectionAttempts: 'Infinity',
      timeout: 10000,
      transports: ['websocket'],
    });
    const subcribe = () => {
      socket.emit('subscribe', {
        token: userToken,
      });
    };

    const unsubcribe = () => {
      socket.emit('unsubcribe', {
        token: userToken,
      });
      socket.removeAllListeners();
      window.location.reload();
    };

    const disconnect = () => {
      socket?.close();
    };

    useEffect(() => {
      subcribe();
    }, [userToken]);

    ws = {
      socket,
      subcribe,
      unsubcribe,
      disconnect,
    };
    socketOnTimeLine({ dispatch, socket });
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
}

SocketContext.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
  userToken: PropTypes.string,
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  userToken: makeSelectUserToken(),
});

export default connect(mapStateToProps)(SocketContext);
