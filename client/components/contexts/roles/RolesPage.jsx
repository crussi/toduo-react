const {
    List,
    ListItem,
    ListDivider,
    Avatar,
    TextField,
    Card,
    CardHeader,
    CardMedia,
    CardTitle,
    CardActions,
    CardText,
    FlatButton

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
        let titleStyle = {
            fontSize: 30,
            color: "rgba(255, 255, 255, 0.95)",
            display: 'block',
            lineHeight: '36px',
        };
        let subtitleStyle = {
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.95)",
            display: 'block',
        };
        let mediaStyle = {
            backgroundColor: '#009688'
        };
        let overlayContentStyle = {
            background: 'transparent'
        };
        comp = this.data.roles.map((role) => {
            console.dir(role);
            console.log(role.Name);
            let itemProps = {
                key: role._id,
                primaryText: role.Name,
                nextstep: this.props.nextstep,
                handleRouting: this.handleRouting,
                handleRemove: this.handleRemove,

            };
            let textProps = {
                hintText: role.Name
            };

            return [
                <TodoItem
                    key={ role._id }
                    task={ role }
                    beingEdited={ role._id === this.state.taskBeingEditedId }
                    onInitiateEdit={ this.setTaskBeingEdited.bind(this, role._id) }
                    onStopEdit={ this.setTaskBeingEdited.bind(this, null) } />

            ]
        });
        let mediaTitle = <CardTitle title="Roles" subtitle="The roles you play in life, that matter most to you!"
            titleStyle={titleStyle} subtitleStyle={subtitleStyle}
            />
        return <div className="list-page">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <div className="list-items">
                                <List>
                                    {comp}
                                </List>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" ref="tasks">
                            <div className="list-card">
                                <Card>
                                    <CardMedia mediaStyle={mediaStyle} overlayContentStyle={overlayContentStyle} overlay={mediaTitle}>
                                        <img src="/images/Transparent.gif" width="300px" height="150px"/>
                                    </CardMedia>
                                    <CardTitle title="What are your most important roles?" />
                                    <CardText>
                                        Everything you do ties back to one of these important roles.  The sum of these roles will help define who you are and where you spend your time.  Are you a spouse, a parent, a friend?  If so, use these role areas to help you be certain you're investing your time wisely.
                                    </CardText>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    }
});