const SerialPort = require('serialport')
const { portSrc } = require('../config')

const Readline = SerialPort.parsers.Readline
const port = new SerialPort(portSrc)
const parser = new Readline()

const setSerialListener = (onSerialData) => {
  port.pipe(parser)
  parser.on('data', onSerialData)
}

exports.setSerialListener = setSerialListener
