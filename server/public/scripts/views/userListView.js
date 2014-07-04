var app = app || {};

app.UserListView = Backbone.View.extend({
    // el: '.page', // underlying DOM element into which the view is rendered
    
    initialize: function() {
        this.listenTo(this.collection, "change", this.render)
    },
    
    listTemplate: _.template("<% _.each(users, function(user) { %> <li><%= user.get('firstname') %></li> <% }); %>"),
    
    render: function () {
        this.$el.html(this.listTemplate({users: this.collection}));
    }
});