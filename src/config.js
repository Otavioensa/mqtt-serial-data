const {
  TOPIC,
  BROKER,
  PORTSRC
} = process.env

const config = {
  topic: TOPIC || 'my-mqtt-topic',
  broker: BROKER || 'mqtt://test.mosquitto.org',
  portSrc: PORTSRC
}

module.exports = config