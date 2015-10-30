let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

Actionable = React.createClass({

    handleClick(val){
        this.props.callback('Actionable.' + val);
    },
    render(){
        //console.log('Actionable render');
        let childProps = {
            question: "Is this actionable?",
            callback: this.handleClick
        };
        //let iconClass = "zmdi zmdi-" + this.props.icon;
        return <div>
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={250}>
                <MultiStepYesNo {...childProps}/>
            </ReactCSSTransitionGroup>
        </div>

    }
});
