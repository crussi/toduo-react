

Roles = new Mongo.Collection('roles');


Role = Astro.Class({
    name: 'Role',
    collection: Roles,
    fields: {
        Name: {
            type: 'string',
            validator: [
                //Validators.minLength(3),
                Validators.maxLength(100)
            ]
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
    '/role/delete': function (id) {
        Roles.remove(id);
    },
    '/role/addNew': function (data) {
        var role = new Role();
        console.log('role addNew');
        console.dir(data);
        role.set({
            Name: data.Name
        });

        console.dir(role);
        if (role.validate()) {
            role.save();
        } else {
            //TODO: need to return error
            console.log("role is invalid");
            throw new Meteor.Error("Role is invalid", "Unable to save role.");
        }

    }
});
