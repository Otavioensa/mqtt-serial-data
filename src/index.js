require('dotenv').config()

const mqtt = require('mqtt')
const { setSerialListener } = require('./serial')
const { broker, topic } = require('./config')
const publishOptions = { qos: 1 }

let mqttClient

async function onSerialData(data) {
  console.log(data)
  await mqttClient.publishAsync(topic, data, publishOptions)
  console.log('A message has been sent!')
}

async function start() {
  mqttClient = await mqtt.connectAsync(broker)
  console.log('connected')
  setSerialListener(onSerialData)
}

start()