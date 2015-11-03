const {
    List,
    ListItem,
    ListDivider,
    Avatar

    } = mui;
const styles = {
    list: {
        marginRight: '120px'
        //marginLeft: '10px'
    }
}

InboxList = React.createClass({
    propTypes: {
        selectedItemId: React.PropTypes.string
    },
    mixins: [ReactMeteorData],
    getMeteorData() {
        //return {
        //    inboxItems: Inbox.find({}, { sort: { dateCreated: 1, description: 1 } }).fetch()
        //}

        const subHandles = [
            Meteor.subscribe("inbox")
        ];

        const subsReady = _.all(subHandles, function (handle) {
            return handle.ready();
        });

        //// Get the current routes from React Router
        //const routes = this.getRoutes();
        //// If we are at the root route, and the subscrioptions are ready
        //if (routes.length > 1 && routes[1].isDefault && subsReady) {
        //    // Redirect to the route for the first todo list
        //    this.replaceWith("todoList", { listId: Lists.findOne()._id });
        //}

        return {
            subsReady: subsReady,
            inboxItems: Inbox.find({}, { sort: { dateCreated: 1, description: 1 } }).fetch(),
            //currentUser: Meteor.user(),
            //disconnected: ShowConnectionIssues.get() && (! Meteor.status().connected)
            disconnected: false
        };

    },
    selectItem(itemId) {
        //console.log('selectItem itemId: ' + itemId);
        //this.props.onItemSelected(itemId);
    },
    //handleCallback(val){
    //    console.log('inboxlist project-new-id: ' + sessionStore.get('project-new-id')._id);
    //    console.log('InboxList handleCallback');
    //},
    handleRouting(cardKey){
        this.handleRemove(cardKey);
        let _id = sessionStore.get('project-new')._id;
        console.log('inboxList handleRouting id: ' + _id);
        FlowRouter.go('/project/' + _id);
    },
    handleRemove(cardKey){
        console.log('inboxList handleRemove cardKey: ' + cardKey);
        Meteor.call("/inbox/delete", cardKey, (err, res) => {
            console.log('meteor.call inbox delete');
            if (err) {
                console.log("Failed to delete inbox item.");
                return;
            } else {
                console.log("inbox delete success");
            }
        });
    },
    render() {
        let listStyle = this.props.style ?
            update(styles.list, {$merge: this.props.style}) :
            styles.list;

        return (<div style={listStyle}>
            {
                this.data.inboxItems.map((item) => {
                    let style = {
                        paddingTop:'10px',
                        paddingBottom:'10px'
                    };
                    let avatarStyle = {
                        fontSize:'20px'
                    }
                    if (this.props.selectedItemId === item._id) {
                        style["backgroundColor"] = "#eee";
                    }
                    let today = moment(new Date().toJSON());
                    let days = today.diff(item.dateCreated,'days');
                    let secondaryText = moment(item.dateCreated).fromNow();
                    //console.log('today: ' + today);
                    //console.log('days: ' + days);
                    //console.log('inboxList item.description: ' + item.description);
                    let cardProps = {
                        cardKey: item._id,
                        primaryText: item.description,
                        avatar: <Avatar style={avatarStyle}>{days}</Avatar>,
                        secondaryText: "Entered " + secondaryText,
                        nextstep: this.props.nextstep,
                        handleRouting: this.handleRouting,
                        handleRemove: this.handleRemove
                    }
                    return [
                        <CollapseCard key={ item._id } {...cardProps}/>
                    ]
                })
            }
        </div>);
    }
});