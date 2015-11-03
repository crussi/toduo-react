Meteor.publish('inbox', function() {

    return Inbox.find();
});

Meteor.publish('project', function(id) {
    console.log('publish project id: ' + id);
    return Projects.find({_id:id});
});