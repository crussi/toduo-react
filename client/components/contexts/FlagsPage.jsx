
FlagsPage = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {

        const subHandles = [
            Meteor.subscribe("flags")
        ];

        const subsReady = _.all(subHandles, function (handle) {
            return handle.ready();
        });

        return {
            subsReady: subsReady,
            items: Flags.find({}),
            //currentUser: Meteor.user(),
            //disconnected: ShowConnectionIssues.get() && (! Meteor.status().connected)
            disconnected: false
        };

    },
    onRemoveItem(itemId) {
        console.log('flags onRemoveItem itemId: ' + itemId);
    },
    onTextChange(itemId, newText) {
        console.log('flags onTextChange itemId: ' + itemId + ' newText: ' + newText);
    },
    render(){

        let contextProps = {
            backgroundColor: "#009688",
            icon: "flag",
            mediaTitle: "Flags",
            mediaSubtitle:"These flags help categorize your tasks.",
            cardTitle: "What flags will help you categorize your tasks?",
            cardText: 'Flags like "Priority", "Vacation", "Wedding", etc. will help you connect related tasks.',
            data: this.data
        }

        return <ContextPage {...contextProps}/>
    }
});