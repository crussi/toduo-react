
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

MultiStep = React.createClass({
    getInitialState() {
        return {
            prevkey: [],
            nextkey: ["MultiStep.Expand"]
        }
    },
    componentWillMount(){
        //console.log('componentWillMount');
        //
        //React.render(<Actionable callback={this.handleClick} />, document.getElementById("multi-step-container"));

    },

    handleClick(val){
        //console.log('MultiStep: ' + val);
        //console.log(this.props.nextstep["Actionable.Yes"]);
        if (val.toUpperCase() !== "CANCEL") {
            //this.setState({prevkey: this.state.nextkey});
            //this.setState({nextkey: val});
            this.setState({nextkey: this.state.nextkey.concat(val)});
        } else {
            this.setState({path: this.state.nextkey.slice(0, -1)});
        }
    },
    render(){
        const {nextkey} = this.state;
        let key = nextkey[nextkey.length-1];
        //let hasPrev = nextkey.length > 1;
        //console.log('nextkey: ' + nextkey);
        let nextstep = this.props.nextstep[key].nextstep;
        //let stepProps = JSON.stringify(this.props.nextstep[key], null, 4);
        //console.dir(stepProps);
        //stepProps.hasPrev = hasPrev;
        console.log('nextkey.length: ' + nextkey.length);
        let childProps = {
            callback: this.handleClick,
            hasPrev: nextkey.length > 1,
            icon: nextstep.icon,
            avgpctdone: this.props.nextstep[key].avgpctdone
        };
        console.dir(childProps);
        //let comp = React.cloneElement(nextstep.component, { callback: this.handleClick, stepProps: stepProps });
        let comp = React.cloneElement(nextstep.component, childProps);

        return <div className="multi-step">
            <ReactCSSTransitionGroup transitionName="example">
            {comp}
            </ReactCSSTransitionGroup>
        </div>
    }
});
