let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

IsDelegatable = React.createClass({

    handleNextStep(val){
        this.props.handleNextStep('IsDelegatable.' + val);
    },
    render(){
        let childProps = {
            question: "Can this be delegated?",
            handleNextStep: this.handleNextStep
        };
        return <div>
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={250}>
                <NextActionYesNo {...childProps}/>
            </ReactCSSTransitionGroup>
        </div>

    }
});
