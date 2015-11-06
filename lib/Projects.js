

Projects = new Mongo.Collection('projects');


Project = Astro.Class({
    name: 'Project',
    collection: Projects,
    fields: {
        Title: {
            type: 'string',
            validator: [
                //Validators.minLength(3),
                Validators.maxLength(25)
            ]
        },
        Outcome: {
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
        PctComplete: {
            type:'number',
            transient: true
        },
        IsComplete: {
            type:'boolean',
            transient: true
        },
        dateCreated: {
            type: 'date',
            immutable: true
        },
        dateUpdated: {
            type: 'date',
            immutable: true
        },
        Tasks: {
            type:'array',
            default: function() {return [];}
        }
    },
    methods: {
        load: function(data) {
            //Note: expects data from ProjectForm.jsx
            this.set({
                Title: data.Title,
                Outcome: data.Outcome,
                DateDue: data.DateDue
            });
            this.addTask(data.Task1);
            this.addTask(data.Task2);
            this.addTask(data.Task3);
            this.addTask(data.Task4);
            this.addTask(data.Task5);
        },
        addTask: function(task) {
            if (task && task.trim().length > 0) {
                this.push('Tasks',{"Task":task, "IsComplete":false});
            }
        }
    },
    events: {
        afterInit: function() {
            var total = 0, complete = 0;
            for (var i = 0; i<= this.Tasks.length; i++){
                total++;
                complete = this.Tasks[i] && this.Tasks[i].IsComplete ? complete++ : complete;
            }
            this.set('PctComplete',complete/total);
            this.set('IsComplete',this.PctComplete == 1 ? true : false);
        },
        afterSave: function(){
            console.log('after save');

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
    '/projects/delete': function (id) {
        Projects.remove(id);
    },
    '/projects/setDetails': function (id, project) {
        console.log('project/setDetails');
        Projects.update(id, {$set: {Title: project.Title, Outcome: project.Outcome, DateDue: project.DateDue}});
    },
    '/projects/addNew': function (data) {
        var project = new Project();

        project.load(data);
        if (project.validate()) {
            project.save();

            MenuData.update({name: 'Projects'}, {
                '$push': {
                    "children": {
                        "_id": project._id,
                        "name": project.Title,
                        "icon": "assignment",
                        "color": "pink",
                        "route": "/project/" + project._id
                    }
                }
            });
            var transitionQuestion = '"' + project.Title + '" was created ... ';
            var transitionRoute = "/project/" + project._id;
            return {_id: project._id, 'Title': project.Title, 'TransitionQuestion': transitionQuestion, "route": transitionRoute};

        } else {
            //TODO: develop a validationerror function in project
            console.log("project is invalid");
            throw new Meteor.Error("Project is invalid", "Unable to save the project.");
        }

    }
});
