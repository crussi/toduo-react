const { FlatButton } = mui;

const styles = {
    question: {
        fontSize: '1rem',
        fontWeight: 'bold',
        //paddingTop: '20px',
        paddingBottom: '20px',
        marginRight: '10px',
        marginTop: '10px'
    },
    button: {
        margin: '5px'
    }
};

MultiStepYesNo = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext(){
        return {
            muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
        }
    },
    handleNextStep(val){
        this.props.handleNextStep(val);
    },
    render(){
        //console.log('MultiStepYesNo render');
        let questionStyle = styles.question;
        let btnStyle = styles.button;
        return <div className="col-xs-12 container">
                <div className="box box-container step">
                    <div className="row">
                        <div className="col-xs-4">
                            <div className="box-first box-container">
                                <div style={questionStyle}>{this.props.question}</div>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="box-first box-container">
                                <FlatButton style={btnStyle}  label="Yes" onClick={e => this.handleNextStep("Yes")}/>
                                <FlatButton style={btnStyle}  label="No" onClick={e => this.handleNextStep("No")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
});
