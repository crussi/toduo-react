const {
    FlatButton
} = mui;

const styles = {
    //container : {
    //    minHeight: '75px',
    //    position: 'relative'
    //},
    //step: {
    //    marginLeft: '55px'
    //
    //},
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
    },
    btnPrev: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        fontSize: '12px',
        color: 'rgba(0,0,0,0.50)'
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
        //let contStyle = styles.container;
        //let stepStyle = styles.step;
        let questionStyle = styles.question;
        let btnStyle = styles.button;
        let btnPrevStyle = styles.btnPrev;
        let prevBtn;
        //let stepProps = this.props.stepProps;
        //console.log('MultiStepYesNo.jsx');
        console.dir(this.props);
        if (this.props.hasPrev == true) {
            console.log('hasPrev == true');
            prevBtn = <FlatButton style={btnPrevStyle}  label="Prev" onClick={e => this.handleClick("Prev")}><i className="zmdi zmdi-chevron-left btn-icon"/></FlatButton>;
        }
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
                                <FlatButton style={btnStyle}  label="Yes" onClick={e => this.handleClick("Yes")}/>
                                <FlatButton style={btnStyle}  label="No" onClick={e => this.handleClick("No")}/>
                            </div>
                        </div>
                    </div>
                </div>
                {prevBtn}
            </div>
    }
});
