

Actionable = React.createClass({

    handleClick(val){
        this.props.callback('Actionable.' + val);
    },
    render(){

        //console.log('Actionable.jsx');
        //console.dir(this.props);
        let childProps = {
            question: "Is this actionable?",
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
