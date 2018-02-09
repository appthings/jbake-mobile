# fR7

Mobile MS example, Uses FrameWork7, RiotJS and Pug/Jade.

To build:

Skip step 1 for now.
1. Get logging, w/ account on logz.io.
Edit www/ts/initLog w/ your key

2. Build:
npm -i
gulp

Ignore error: 'Property 'log' does not exist' - I'll fix it.

3. Run:
Start any http/webserver.
I use WedgeServer or 
in VSCode I use 'LiverServer' plugin

Open browser.

4. Modify.
gulp watch
Change www/ts/model.ts access method to return RSS file

.