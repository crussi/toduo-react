//
//ContextsPage = React.createClass({
//    mixins: [ReactMeteorData],
//
//    getMeteorData() {
//
//        const subHandles = [
//            Meteor.subscribe("contexts")
//        ];
//
//        const subsReady = _.all(subHandles, function (handle) {
//            return handle.ready();
//        });
//
//        return {
//            subsReady: subsReady,
//            items: Contexts.find({}),
//            //currentUser: Meteor.user(),
//            //disconnected: ShowConnectionIssues.get() && (! Meteor.status().connected)
//            disconnected: false
//        };
//
//    },
//    onRemoveItem(itemId) {
//        console.log('contexts onRemoveItem itemId: ' + itemId);
//    },
//    onTextChange(itemId, newText) {
//        console.log('contexts onTextChange itemId: ' + itemId + ' newText: ' + newText);
//    },
//    render(){
//
//        let cardText = "Whether you're at the store, at work, at home, online or on the phone, ";
//        cardText += "these are the places you get things done.  Also, during downtime, this weekend, ";
//        cardText += "on the way home are examples of when you might do something.  These are all contexts."
//        let contextProps = {
//            backgroundColor: "#009688",
//            icon: "pin",
//            mediaTitle: "Contexts",
//            mediaSubtitle:"Where and when you get things done",
//            cardTitle: "",
//            cardText: cardText,
//            data: this.data
//        }
//
//        return <ContextPage {...contextProps}/>
//    }
//});