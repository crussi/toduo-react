Meteor.publish('inbox', function() {
    return Inbox.find();
});

Meteor.publish('menudata', function() {
    return MenuData.find();
});

Meteor.publish('project', function(id) {
    return Projects.find({_id:id});
});

Meteor.publish('roles', function() {
    return Roles.find({});
});