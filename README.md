# fR7

Mobile CMS/RSS example, Work in Progress. Uses Framework7, Flux, RiotJS and Pug/Jade.

Here is youtube demo video of this app running: http://youtu.be/y2Ac3iPW_yc

To build/run in 4 steps.

1. Get logging, w/ free account on logz.io. Copy the api token/key.
With your editor, create a file www/ts/initLog.js, copy / paste this code using your key.

			var token = 'XXX';
			Logger = new LogzioLogger(token);
			console.log('Logger ready. View logs on logz.io');
			// optional:
			Logger.log({
				param1: 'value1',
				param2: 'value2',
				message: 'Oh hi'
			});

2. Build: (first we need gulp dependencies )

			npm -i

			gulp

3. Run:
Start any http/webserver with www as root. I use WedgeServer or 
in VSCode I use 'LiveServer' plugin.
Open in browser.

4. Modify code:

			gulp watch

			//change www/ts/model.ts access method to return a different RSS file

Build and code comments wellcome. Just use a git issue to do that.
