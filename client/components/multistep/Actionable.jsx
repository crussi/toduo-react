

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
        return <MultiStepYesNo question="Is this actionable?" callback={this.handleClick}/>
    }
});
