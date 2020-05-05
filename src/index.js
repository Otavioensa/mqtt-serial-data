require('dotenv').config()

const mqtt = require('mqtt')
const { setSerialListener } = require('./serial')
const { broker, topic } = require('./config')
const publishOptions = { qos: 1 }

const mqttClient = mqtt.connect(broker)

const onPublish = () => {
  console.log('A message has been sent!')
  mqttClient.end()
}

const onSerialData = (data) => {
  console.log(data)
  mqttClient.publish(topic, data, publishOptions, onPublish)
}

const onBrokerConnection = () => {
  console.log('connected')
  setSerialListener(onSerialData)
}

mqttClient.on('connect', onBrokerConnection)
