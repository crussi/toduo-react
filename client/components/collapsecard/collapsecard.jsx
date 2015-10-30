//const Colors = mui.Styles.Colors;
//const ThemeManager = new mui.Styles.ThemeManager();

CollapseCard = React.createClass({
    getInitialState(){
        return {
            active: false,
            slideDirection: "up"
        }
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext(){
        return {
            muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
        }
    },
    headingClicked(){
        //console.log('card headingClicked');
        this.setState({ active: !this.state.active });
    },
    render: function () {
        //console.log('this.state.active: ' + this.state.active);
        let cardClass = "collapse-card" + (this.state.active ? " active" : "");
        let slideDirection = this.state.active ? " down" : "up";
        //console.log('cardClass: ' + cardClass);
        //console.log('slideDirection: ' + slideDirection);

        let headingProps = {
            primaryText: this.props.primaryText,
            secondaryText: this.props.secondaryText,
            avatar: this.props.avatar
        };
        let comp;
        if (this.state.active) {
            comp = <MultiStep nextstep={this.props.nextstep}/>
        } else {
            comp = <div className="multi-step-filler"></div>
        }
        bodyProps = {
            stepName : this.props.nextstep.name,
            slideDirection: slideDirection
        }

        return (
            <div className={cardClass}>
                <CollapseCardHeading {...headingProps} headingClicked={this.headingClicked} />
                <CollapseCardBody {...bodyProps}>
                    {comp}
                </CollapseCardBody>
            </div>
        );
    }
});


//React.render(
//    <CollapseCard title="Well, hello there"/>,
//
//    document.getElementById('content')
//);