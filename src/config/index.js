const {
  TOPIC,
  BROKER,
  PORTSRC,
} = process.env

const config = {
  topic: TOPIC || 'speakers-program/sensor/pir',
  broker: BROKER || 'mqtt://broker.hivemq.com',
  portSrc: PORTSRC || '/dev/tty.usbserial-AH03B7R1',
}

module.exports = config