let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

IsProject = React.createClass({

    handleClick(val){

        this.props.callback(val.toUpperCase() !== "PREV" ? 'IsProject.' + val : val);
    },
    render(){
        //console.log('IsProject render');

        let childProps = {
            question: "Is this a project?",
            callback: this.handleClick
        };
        //console.dir(childProps);
        let iconClass = "zmdi zmdi-" + this.props.icon;
        return <div>
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={250}>
                <MultiStepYesNo {...childProps}/>
            </ReactCSSTransitionGroup>
        </div>
    }
});
