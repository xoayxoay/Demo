import routes from 'containers/App/routes';

const socketOnTimeLine = ({ dispatch, socket }) => {
  socket.on('new-time-line', (event) => {
    console.log(event);
  });

  socket.on('online', (event) => {
    console.log(event);
  });

  socket.on('offline', (event) => {
    console.log(event);
  });
};

export { socketOnTimeLine };
