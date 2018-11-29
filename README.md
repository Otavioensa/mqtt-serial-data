# mqtt-serial-data
An application that reads data from serial port and sends it to a MQTT broker.

## Steps for execution

1) Clone this repository
2) Check the serial port where data will be read (run `ls /dev/tty*` and check the port you want to read data from)
3) Create a .env file inside **src** folder. You might use the .env.example file as a sample
4) Replace the env variables values with the broker, topic and the serial port name previously checked on step **2**

## Purpose
This application was originally created for reading data published on the serial port by an Arduino application. 
The Arduino application would write each time it identifies some movement on the PIR sensor.
If you want to check the application you [can click here](https://github.com/Otavioensa/presence-sensor).