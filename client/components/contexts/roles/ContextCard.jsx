const {
    Card,
    CardMedia,
    CardTitle,
    CardText
    //Paper, List, ListItem, ContentInbox, ActionGrade, ContentSend, ContentDrafts
    } = mui;

ContextCard = React.createClass({
    trianglify() {
        let img = this.refs.something.getDOMNode();
        let pattern = Trianglify({
            width: img.offsetWidth,
            height: img.offsetHeight,
            cell_size: 125,
            variance: "1",
            x_colors: ['#004D40','#00695C','#00796B','#00897B','#009688','#26A69A','#4DB6AC','#80CBC4','#00BFA5','#1DE9B6','#64FFDA'],
            y_colors: ['#64FFDA','#1DE9B6','#00BFA5','#80CBC4','#4DB6AC','#26A69A','#009688','#00897B','#00796B','#00695C','#004D40']

        });
        img.src = pattern.png();
    },
    handleResize: function(e) {
        this.trianglify();
    },

    adjustTextWidth: function() {

        this.setState({
            textWidth: (width - 40) + 'px'
        });
    },
    componentDidMount: function () {
        window.addEventListener('resize', this.trianglify);
        this.trianglify();
    },
    componentWillUnmount: function() {
        window.removeEventListener('resize', this.trianglify);
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
            //backgroundColor: this.props.backgroundColor
        };
        let overlayContentStyle = {
            background: 'transparent'
        };
        let mediaTitle = <CardTitle title={this.props.mediaTitle} subtitle={this.props.mediaSubtitle}
                                    titleStyle={titleStyle} subtitleStyle={subtitleStyle}
            />

        return <Card>
            <CardMedia mediaStyle={mediaStyle} overlayContentStyle={overlayContentStyle} overlay={mediaTitle}>

                <img src="/images/Transparent.gif" height="150px" ref="something"/>

            </CardMedia>

            <CardText>
                {this.props.cardText}
            </CardText>
            {this.props.content}
        </Card>

    }
});