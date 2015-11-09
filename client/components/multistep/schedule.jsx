let { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const { TextField } = mui;
Schedule = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            //someVar: Session.get('someVar')
        }
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext(){
        return {
            muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
        }
    },

    getInitialState: function () {
        return {
            canSumbit: false,
            textWidth: '256px'
        };
    },

    errorMessages: {
        wordsError: "Please only use letters",
        numericError: "Please provide a number"

    },

    //selectFieldItems: [
    //    { payload: 'never', text: 'Never' },
    //    { payload: 'nightly', text: 'Every Night' },
    //    { payload: 'weeknights', text: 'Weeknights' },
    //    { payload: 'weekends', text: 'Weekends' },
    //    { payload: 'weekly', text: 'Weekly' }
    //],

    styles: {
        container: {
            width: '100%',
            margin: 0,
            padding: 0,
            position: 'relative'
        },
        question: {
            fontSize: '1rem',
            fontWeight: 'bold',
            //paddingTop: '20px',
            //paddingBottom: '20px',
            marginRight: '10px',
            marginTop: '10px'
        },
        submit: {
            marginTop: 32
        },
        text: {
            width: '300px',
            color: '#777'
        },
        hint: {
            color: '#bbb'
        },
        underline: {
            color: '#bbb'
        }
    },

    enableButton: function () {
        this.setState({
            canSubmit: true
        });
    },

    disableButton: function () {
        this.setState({
            canSubmit: false
        });
    },
    submitForm: function (data) {
        var timestamp = (new Date()).getTime();
        var today = new Date(timestamp);
        var from = new Date();
        var to = new Date();
        from.setDate(today.getDate() + 10);
        to.setDate(today.getDate() + 15);
        let task = sessionStore.get("task-in-process");
        task.set({
            DateFrom: from,
            DateTo: to
        });
        console.dir(task);
        sessionStore.set("task-in-process",task);
        this.props.handleNextStep("Schedule.Submit");

    },
    notifyFormError: function (data) {
        console.error('Form error:', data);
    },
    handleResize: function(e) {
        this.adjustTextWidth();
    },

    adjustTextWidth: function() {
        let width = this.refs.box.getDOMNode().offsetWidth;
        this.setState({
            textWidth: (width - 40) + 'px'
        });
    },
    componentDidMount: function () {
        window.addEventListener('resize', this.handleResize);
        this.adjustTextWidth();
    },
    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    },
    render: function () {
        //console.log('NextAction render');

        //Here is how to apply styles to text fields:
        //style={{color:'blue'}} hintStyle={{color:'red'}} underlineStyle={{borderColor:'green'}} underlineFocusStyle={{borderColor:'purple'}}
        //floatingLabelStyle={{color:'yellow'}}
        let styles = this.styles;
        let questionStyle = styles.question;
        let { wordsError, numericError, urlError } = this.errorMessages;
        let textStyle = { color:'orange', width: this.state.textWidth};
        let hintStyle = this.styles.hint;
        let underlineStyle = this.styles.underline;

        let childProps = {
            callback: this.handleClick,
            hasPrev: true
        };

        return (
            <div style={styles.container}>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    style={styles.form} >
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="box box-container step">
                                <div className="row">
                                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" ref="box">
                                        <div className="box-first box-container box-med">

                                            <div style={questionStyle}>What is the next action to take?</div>

                                            <FormsyText style={textStyle}
                                                        name='NextAction'
                                                //required
                                                        maxLength={100}
                                                        hintText="Identify next action ..."
                                                        floatingLabelText="Next action" />

                                        </div>
                                    </div>
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 align-center">
                                        <div className="box-first box-container">
                                            <FlatButton
                                                style={styles.submit}
                                                type="submit"
                                                label="Submit"

                                                disabled={!this.state.canSubmit} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Formsy.Form>
            </div>

        );
    }
});
