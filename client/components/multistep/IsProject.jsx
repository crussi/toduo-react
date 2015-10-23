IsProject = React.createClass({
    getDefaultProps() {
        return {
            callback: this.hello
        };
    },
    handleClick(val){
        this.props.callback('IsProject.' + val);
    },
    render(){
        return <MultiStepYesNo question="Is this a project?" callback={this.handleClick}/>
    }
});
