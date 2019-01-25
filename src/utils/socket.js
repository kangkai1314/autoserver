var websock = null
var global_callback = null
var serverPort = '8000'

function getWebIp () {
  var curIp = window.location.hostname
  return curIp
}

function initWebSocket () {
  var wsuri = 'ws://' + getWebIp() + ':' + serverPort
  websock = new WebSocket(wsuri)
  websock.onmessage = function (e) {
    websocketonmessage(e)
  }
  websock.onclose = function (e) {
    websocketclose(e)
  }
  websock.onopen = function () {
    websocketOpen()
  }
  websock.onerror = function () {
    console.log('websocket连接失败')
  }
}

function sendSock (agentData, callback) {
  global_callback = callback
  if (websock.readyState === websock.OPEN) {
    websocketsend(agentData)
  } else if (websock.readyState === websock.CONNECTING) {
    setTimeout(function () {
      sendSock(agentData, callback)
    }, 1000)
  } else {
    setTimeout(function () {
      sendSock(agentData, callback)
    }, 1000)
  }
}

function websocketonmessage (e) {
  global_callback(JSON.parse(e.data))
}

function websocketsend (agentData) {
  websock.send(JSON.stringify(agentData))
}

function websocketclose (e) {
  console.log('connection closed(' + e.code + ')')
}

function websocketOpen (e) {
  console.log('连接成功')
}

initWebSocket()
