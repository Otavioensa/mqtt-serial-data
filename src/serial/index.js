const { SerialPort, ReadlineParser } = require('serialport')
const { portSrc } = require('../config')


const port = new SerialPort({ path: portSrc, baudRate: 9600 })
const parser = new ReadlineParser()

const setSerialListener = (onSerialData) => {
  port.pipe(parser)
  parser.on('data', onSerialData)
}

exports.setSerialListener = setSerialListener
