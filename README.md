learn backbone.js
=================

Follow the tutorial by Thomas Davis: https://www.youtube.com/watch?v=FZSjvWtUxYk

running the server through gulp (provided by Carsten Lamm: https://github.com/FQ400/i_hate_image_upload)

1. checkout repository:

		git clone git@github.com:clamm/learn_backbone_js.git

2. install nodejs and redis using brew package manager:

		brew install nodejs redis

3. change directory into learn_backbone_js:

		cd learn_backbone_js

4. install dependencies:

		npm install

5. start database redis server:
		
		redis-server

6. use gulp to run the web server:

		node_modules/gulp/bin/gulp.js server

7. open browser at http://localhost:3000/


There will be 3 example users inserted into the database upon each start of the web server (server.js).
You may want to clean the database before a restart:

1. start redis client:

        redis-cli

2. remove all entries from the database:

        FLUSHALL
