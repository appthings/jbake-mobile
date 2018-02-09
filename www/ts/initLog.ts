//type in your logz.io key here

declare var Logger: any

var token = 'uCWXDUBVYBqZfGBzYBHYoewoUnRQawYI'

Logger = new LogzioLogger(token)

Logger.log({
	param1: 'value1',
	param2: 'value2',
	message: 'Oh hi'
})