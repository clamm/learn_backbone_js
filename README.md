learn_backbone.js
=================

Follow the tutorial by Thomas Davis: https://www.youtube.com/watch?v=FZSjvWtUxYk

but using the server that is provided by Carsten Lamm: https://github.com/FQ400/i_hate_image_upload 
because he described how to start the server locally which I copied & adapted here:

1. checkout repository:

		git clone git@github.com:clamm/learn_backbone.js.git

2. install nodejs using brew package manager:

		brew install nodejs

3. change directory into learn_backbone_js:

		cd learn_backbone_js

4. install dependencies:

		npm install

5. using gulp to in run the server:

		node_modules/gulp/bin/gulp.js server

I slightly adapted the server to provide the necessary REST endpoints for the tutorial.

