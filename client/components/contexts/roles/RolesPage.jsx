const {
    List,
    ListItem,
    ListDivider,
    Avatar,
    TextField
    } = mui;

RolesPage = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {

        const subHandles = [
            Meteor.subscribe("roles")
        ];

        const subsReady = _.all(subHandles, function (handle) {
            return handle.ready();
        });

        return {
            subsReady: subsReady,
            roles: Roles.find({}, { sort: { sortorder: 1 } }),
            //currentUser: Meteor.user(),
            //disconnected: ShowConnectionIssues.get() && (! Meteor.status().connected)
            disconnected: false
        };

    },
    getInitialState() {
        return {
            taskBeingEditedId: null,
        };
    },

    setTaskBeingEdited(taskId) {
        this.setState({
            taskBeingEditedId: taskId
        });
    },

    render(){
        comp = this.data.roles.map((role) => {
            console.dir(role);
            console.log(role.Name);
            let itemProps = {
                key: role._id,
                primaryText: role.Name,
                nextstep: this.props.nextstep,
                handleRouting: this.handleRouting,
                handleRemove: this.handleRemove,

            }
            let textProps = {
                hintText: role.Name
            }
            return [
                <TodoItem
                    key={ role._id }
                    task={ role }
                    beingEdited={ role._id === this.state.taskBeingEditedId }
                    onInitiateEdit={ this.setTaskBeingEdited.bind(this, role._id) }
                    onStopEdit={ this.setTaskBeingEdited.bind(this, null) } />
            ]
        })
        return <div>
            <List>
                {comp}
            </List>
        </div>
    }
});