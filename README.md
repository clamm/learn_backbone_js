learn_backbone.js
=================

Follow the tutorial by Thomas Davis: https://www.youtube.com/watch?v=FZSjvWtUxYk

but using the server that is provided by Carstem Lamm: https://github.com/FQ400/i_hate_image_upload 
because he described how to start the server locally which I copied & adapted here:

# checkout repository:

	git clone git@github.com:clamm/learn_backbone.js.git

# install nodejs using brew package manager:

	brew install nodejs

# change directory into learn_backbone.js:

	cd learn_backbone.js

# install dependencies:

	npm install

# using gulp to in run the server:

	node_modules/gulp/bin/gulp.js server


I slightly adapted the server to provide the necessary REST endpoints for the tutorial.

