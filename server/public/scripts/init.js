$LAB
    .script("scripts/router/router.js")
    .script("scripts/models/userModel.js")
    .script("scripts/collections/userCollection.js")
    .script("scripts/views/userListView.js")
    .wait(function () {

        var router = new app.Router();

        router.on('route:home', function () {
            console.log('We have loaded the home page');

            var userCollection = new app.UserCollection();
            new app.UserListView({collection: userCollection});
            userCollection.fetch(); // triggers render of userListView
            // TODO make fetch actually merge the results into collection
            if (userCollection.length != 0) {
                console.log('We have fetched the userCollection');
            }
        });

        // start the router
        Backbone.history.start();
    });


