# fR7

Mobile CMS example, uses FrameWork7, Flux, RiotJS and Pug/Jade.


Here is a youtube of what it looks like:

To build:

(Skip step 1 for now.)
1. Get logging, w/ account on logz.io.
Edit www/ts/initLog w/ your key

2. Build:

npm -i

gulp

Ignore error: 'Property 'log' does not exist' - I'll fix it.


3. Run:
Start any http/webserver with www as root.
I use WedgeServer or 
in VSCode I use 'LiveServer' plugin.

Open in browser.

4. Modify.

gulp watch

Change www/ts/model.ts access method to return a different RSS file

