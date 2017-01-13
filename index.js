const micro = require('micro')
const { send, json } = micro
const io = require('socket.io')()

const server = micro(async (req, res) => {
  const data = await json(req)
  io.emit('payload', data);
  send(res, 200, 'ok')
})


io.attach(server)
server.listen(3000)
