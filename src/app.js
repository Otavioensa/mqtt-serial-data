
const SerialPort = require('serialport')
const mqtt = require('mqtt')
const { broker, portSrc, topic } = require('./config')

const Readline = SerialPort.parsers.Readline
const port = new SerialPort(portSrc)
const parser = new Readline()

const client = mqtt.connect(broker)

const onPublish = () => console.log('A message has been sent!')

const onSerialData = (data) => {
	console.log(data)
	client.publish(topic, data, onPublish)
}

const onBrokerConnection = () => {
	console.log('connected')
	port.pipe(parser)
	parser.on('data', onSerialData)
}

client.on('connect', onBrokerConnection)
