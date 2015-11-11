const {
    Card,
    CardMedia,
    CardTitle,
    CardText
    } = mui;

ContextCard = React.createClass({

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
            backgroundColor: this.props.backgroundColor
        };
        let overlayContentStyle = {
            background: 'transparent'
        };
        let mediaTitle = <CardTitle title={this.props.mediaTitle} subtitle={this.props.mediaSubtitle}
                                    titleStyle={titleStyle} subtitleStyle={subtitleStyle}
            />
        return <Card>
                <CardMedia mediaStyle={mediaStyle} overlayContentStyle={overlayContentStyle} overlay={mediaTitle}>
                    <img src="/images/Transparent.gif" width="300px" height="150px"/>
                </CardMedia>
                <CardTitle title={this.props.cardTitle} />
                <CardText>
                    {this.props.cardText}
                </CardText>
            </Card>

    }
});