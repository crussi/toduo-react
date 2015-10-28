

MultiStep = React.createClass({
    getInitialState() {
        return {
            key: "MultiStep.Expand"
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
        this.setState({ key: val });
    },
    render(){
        let key = this.state.key;
        console.log('key: ' + key);
        let nextstep = this.props.nextstep[key].nextstep;
        let stepProps = JSON.stringify(this.props.nextstep[key], null, 4);

        let comp = React.cloneElement(nextstep.component, { callback: this.handleClick, stepProps: stepProps });

        return <div>
            {comp}
        </div>
    }
});
