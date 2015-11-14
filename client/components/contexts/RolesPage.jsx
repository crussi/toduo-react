
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
            items: Roles.find({}, { sort: { sortorder: 1 } }),
            //currentUser: Meteor.user(),
            //disconnected: ShowConnectionIssues.get() && (! Meteor.status().connected)
            disconnected: false
        };

    },
    onRemoveItem(itemId) {
        console.log('roles onRemoveItem itemId: ' + itemId);
    },
    onTextChange(itemId, newText) {
        console.log('roles onTextChange itemId: ' + itemId + ' newText: ' + newText);
    },
    render(){

        let contextProps = {
            backgroundColor: "#009688",
            icon: "local-offer",
            mediaTitle: "Roles",
            mediaSubtitle:"The roles you play in life, that matter most to you!",
            cardTitle: "What are your most important roles?",
            cardText: "Everything you do ties back to one of these important roles.  The sum of these roles will help define who you are and where you spend your time.  Are you a spouse, a parent, a friend?  If so, use these role areas to help you be certain you're investing your time wisely.",
            data: this.data
        }

        return <ContextPage {...contextProps}/>
    }
});