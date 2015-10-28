

Actionable = React.createClass({
    getDefaultProps() {
        return {
            callback: this.hello
        };
    },
    handleClick(val){
        this.props.callback('Actionable.' + val);
    },
    render(){
        let stepProps = this.props.stepProps;
        return <MultiStepYesNo question="Is this actionable?" callback={this.handleClick} {...stepProps}/>
    }
});
