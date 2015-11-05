

MultiStep = React.createClass({
    getInitialState() {
        return {
            nextkey: ["MultiStep.Expand"]
        }
    },
    handleNextStep(val){
        this.setState({nextkey: this.state.nextkey.concat(val)});
        //switch (val.toUpperCase()) {
        //
        //    case "ROUTE":
        //        this.props.callback(val);
        //        break;
        //    case "DONE":
        //        this.props.callback(val);
        //        break;
        //    default:
        //        this.setState({nextkey: this.state.nextkey.concat(val)});
        //        break;
        //}
        //if (val.toUpperCase() !== "PREV") {
        //    this.setState({nextkey: this.state.nextkey.concat(val)});
        //} else {
        //    this.setState({nextkey: this.state.nextkey.slice(0, -1)});
        //}
    },
    handlePrev(){
        this.setState({nextkey: this.state.nextkey.slice(0, -1)});
    },
    handleRouting(){
        this.props.handleRouting();
    },
    handleRemove(){
        this.props.handleRemove();
    },
    render(){
        const {nextkey} = this.state;
        let key = nextkey[nextkey.length-1];
        let nextstep = this.props.nextstep[key].nextstep;
        let childProps = {
            title: this.props.title,
            handleNextStep: this.handleNextStep,
            handleRouting: this.handleRouting,
            handleRemove: this.handleRemove,
            icon: nextstep.icon,
            avgpctdone: this.props.nextstep[key].avgpctdone
        };
        let hasPrev = nextkey.length > 1;
        if (key.indexOf("Submit") > -1) {
            hasPrev = false;
        }
        let prevProps = {
            callback: this.handlePrev,
            hasPrev: hasPrev
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
