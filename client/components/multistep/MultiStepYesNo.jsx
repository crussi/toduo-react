const {
    FlatButton
} = mui;

const styles = {
    step: {
        marginLeft: '55px'
    },
    question: {
        fontSize: '1rem',
        fontWeight: 'bold',
        paddingTop: '20px',
        paddingBottom: '20px',
        marginRight: '10px'
    },
    button: {
        margin: '5px'
    }
};

//const Colors = mui.Styles.Colors;
//const ThemeManager = new mui.Styles.ThemeManager();

MultiStepYesNo = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext(){
        return {
            muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
        }
    },
    handleClick(val){
        this.props.callback(val);
    },
    render(){
        let stepStyle = styles.step;
        let questionStyle = styles.question;
        let buttonStyle = styles.button;
console.dir(this.props);
        return <div style={stepStyle}>

            <span style={questionStyle}>{this.props.question}</span>

                <FlatButton style={buttonStyle}  label="Yes" onClick={e => this.handleClick("Yes")}/>
                <FlatButton style={buttonStyle}  label="No" onClick={e => this.handleClick("No")}/>`
        </div>
    }
});
