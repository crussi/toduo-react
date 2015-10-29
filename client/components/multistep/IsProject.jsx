IsProject = React.createClass({

    handleClick(val){
        this.props.callback('IsProject.' + val);
    },
    render(){

        let childProps = {
            question: "Is this a project?",
            callback: this.handleClick,
            hasPrev: this.props.hasPrev
        };
        console.dir(childProps);
        let iconClass = "zmdi zmdi-" + this.props.icon;
        //return <MultiStepYesNo question="Is this actionable?" callback={this.handleClick} />
        return <div>
            <MultiStepYesNo {...childProps}/>
        </div>
    }
});
