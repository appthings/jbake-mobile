
declare var Logger: any
//declare var LogzioLogger: any

var token = 'uCWXDUBVYBqZfGBzYBHYoewoUnRQawYI'

Logger = new LogzioLogger(token)
console.log('logger ready. View on logz.io')

Logger.log({
	param1: 'value1',
	param2: 'value2',
	message: 'Oh hi'
})