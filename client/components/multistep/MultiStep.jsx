
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

MultiStep = React.createClass({
    getInitialState() {
        return {
            prevkey: "",
            nextkey: "MultiStep.Expand"
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
            this.setState({prevkey: this.state.nextkey});
            this.setState({nextkey: val});
        } else {

        }
    },
    render(){
        let nextkey = this.state.nextkey;
        console.log('nextkey: ' + nextkey);
        let nextstep = this.props.nextstep[nextkey].nextstep;
        let stepProps = JSON.stringify(this.props.nextstep[nextkey], null, 4);

        let comp = React.cloneElement(nextstep.component, { callback: this.handleClick, stepProps: stepProps });

        return <div>
            <ReactCSSTransitionGroup transitionName="example">
            {comp}
            </ReactCSSTransitionGroup>
        </div>
    }
});
