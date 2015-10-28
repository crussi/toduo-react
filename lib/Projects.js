Projects = new Mongo.Collection('projects');

Meteor.methods({
    '/projects/delete': function (id) {
        Projects.remove(id);
    },
    '/projects/setDetails': function (id, project) {
        console.log('project/setDetails');
        Projects.update(id, {$set: {Title: project.Title, Outcome: project.Outcome, DateDue: project.DateDue}});
    },
    '/projects/addNew': function (project) {
        var timestamp = (new Date()).getTime();
        var now = new Date(timestamp);
        project.dateCreated = now;

        Projects.insert(project);
        Session.set( "LastAction", {"Collection":"Projects", "Action","/projects/addNew", "Undo": "/projects/delete", "id",""} );
    }
});
