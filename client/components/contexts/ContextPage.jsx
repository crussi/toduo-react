const {
    List,
    ListDivider,
    TextField,
    Card,
    CardMedia,
    CardTitle,
    CardText,
    FloatingActionButton,
    FontIcon,

    } = mui;

const Colors = mui.Colors;

ContextPage = React.createClass({

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
    onRemoveItem(itemId) {
        //console.log('onRemoveItem itemId: ' + itemId);
        this.props.onRemoveItem(itemId);
    },
    onTextChange(itemId, newText) {
        //console.log('onTextChange itemId: ' + itemId + ' newText: ' + newText);
        this.props.onTextChange(itemId, newText);
    },
    render(){

        comp = this.props.data.items.map((item) => {

            let itemProps = {
                "key": item._id,
                "item": item,
                "beingEdited": item._id === this.state.taskBeingEditedId,
                "onInitiateEdit": this.setTaskBeingEdited.bind(this, item._id),
                "onStopEdit": this.setTaskBeingEdited.bind(this, null),
                "onRemoveItem": this.onRemoveItem.bind(this, item._id),
                "onTextChange": this.onTextChange.bind(this, item._id)
            };

            return [
                <ContextItem {...itemProps}/>

            ]
        });
        let list =  <div className="row">
                        <div className="list-items col-xs-4">
                            <List>
                                {comp}
                            </List>
                        </div>
                        <div className="col-xs-4 align-bottom">
                            <FloatingActionButton>
                                <FontIcon className="muidocs-icon-action-home" />
                            </FloatingActionButton>
                        </div>
                    </div>
        let cardProps = {
            content: list,
            icon: this.props.icon,
            backgroundColor: this.props.backgroundColor,
            mediaTitle: this.props.mediaTitle,
            mediaSubtitle: this.props.mediaSubtitle,
            cardTitle: this.props.cardTitle,
            cardText: this.props.cardText
        }

        return <div className="list-page">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                        <div className="col-xs-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10" ref="tasks">
                            <div className="list-card">
                                <ContextCard {...cardProps}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    }
});