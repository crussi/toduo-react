

MultiStep = React.createClass({
    getInitialState() {
        return {
            prevkey: [],
            nextkey: ["MultiStep.Expand"]
        }
    },
    componentWillMount(){
        //console.log('MultiStep componentWillMount');
        //
        //React.render(<Actionable callback={this.handleClick} />, document.getElementById("multi-step-container"));

    },
    shouldComponentUpdate: function(nextProps, nextState){
        //console.log('MultiStep shouldComponentUpdate');
        return true;
    },
    handleClick(val){
        //console.log('MultiStep: ' + val);
        //console.log(this.props.nextstep["Actionable.Yes"]);
        if (val.toUpperCase() !== "PREV") {
            //this.setState({prevkey: this.state.nextkey});
            //this.setState({nextkey: val});
            this.setState({nextkey: this.state.nextkey.concat(val)});
        } else {
            //console.log('MultiStep val: ' + val);
            this.setState({nextkey: this.state.nextkey.slice(0, -1)});
        }
    },
    render(){
        const {nextkey} = this.state;
        let key = nextkey[nextkey.length-1];
        //let hasPrev = nextkey.length > 1;
        //console.dir(nextkey);
        //console.log('MultiStep key: ' + key);
        let nextstep = this.props.nextstep[key].nextstep;
        //let stepProps = JSON.stringify(this.props.nextstep[key], null, 4);
        //console.dir(stepProps);
        //stepProps.hasPrev = hasPrev;
        //console.log('nextkey.length: ' + nextkey.length);
        let childProps = {
            callback: this.handleClick,
            icon: nextstep.icon,
            avgpctdone: this.props.nextstep[key].avgpctdone
        };
        let prevProps = {
            callback: this.handleClick,
            hasPrev: nextkey.length > 1
        }
        //console.dir(childProps);
        //let comp = React.cloneElement(nextstep.component, { callback: this.handleClick, stepProps: stepProps });
        let comp = React.cloneElement(nextstep.component, childProps);

        return <div className="multi-step">
                {comp}
                <PrevButton {...prevProps}/>
        </div>
    }
});
