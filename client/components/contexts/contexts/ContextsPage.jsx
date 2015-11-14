
ContextsPage = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {

        const subHandles = [
            Meteor.subscribe("contexts")
        ];

        const subsReady = _.all(subHandles, function (handle) {
            return handle.ready();
        });

        return {
            subsReady: subsReady,
            items: Contexts.find({}),
            //currentUser: Meteor.user(),
            //disconnected: ShowConnectionIssues.get() && (! Meteor.status().connected)
            disconnected: false
        };

    },
    onRemoveItem(itemId) {
        console.log('contexts onRemoveItem itemId: ' + itemId);
    },
    onTextChange(itemId, newText) {
        console.log('contexts onTextChange itemId: ' + itemId + ' newText: ' + newText);
    },
    render(){

        let contextProps = {
            backgroundColor: "#009688",
            mediaTitle: "Contexts",
            mediaSubtitle:"The context in which tasks should be done.",
            cardTitle: "In what contexts do you normally complete tasks?",
            cardText: 'Contexts, such as work, store, online, etc. will help you select tasks to be done at the right time.',
            data: this.data
        }

        return <ContextsPage {...contextProps}/>
    }
});