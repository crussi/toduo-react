

Tasks = new Mongo.Collection('tasks');


Task = Astro.Class({
    name: 'Task',
    collection: Tasks,
    fields: {
        Title: {
            type: 'string',
            validator: [
                //Validators.minLength(3),
                Validators.maxLength(100)
            ]
        },
        DateDue: {
            type:'date',
            optional: true
        },
        IsComplete: {
            type:'boolean',
            transient: true,
            default: false
        },
        dateCreated: {
            type: 'date',
            immutable: true
        },
        dateUpdated: {
            type: 'date',
            immutable: true
        }
    },
    behaviors: {
        timestamp: {
            hasCreatedField: true,
            createdFieldName: 'dateCreated',
            hasUpdatedField: true,
            updatedFieldName: 'dateUpdated'
        }
    }
});

Meteor.methods({
    '/tasks/delete': function (id) {
        Tasks.remove(id);
    },
    '/tasks/addNew': function (data) {
        var task = new Task();
        console.log('tasks addNew');
        console.dir(data);
        task.set({
            Title: data.Title,
            Type: data.TaskType
        });

        console.dir(task);
        if (task.validate()) {
            task.save();
            let transitionQuestion = '"' + task.Title + '" was moved to trash ...';
            return {_id: task._id, 'Title': task.Title, 'TransitionQuestion': transitionQuestion};

        } else {
            //TODO: need to return error
            console.log("task is invalid");
        }

    }
});
