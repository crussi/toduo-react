let { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;

ProjectForm = React.createClass({

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
        paper: {
            width: '100%',
            margin: 0,
            padding: 0
        },
        submit: {
            marginTop: 32
        },
        text: {
            width: '300px'
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
        alert(JSON.stringify(data, null, 4));
    },

    notifyFormError: function (data) {
        console.error('Form error:', data);
    },
    handleResize: function(e) {
        this.adjustTextWidth();
    },
    adjustTextWidth: function() {
        let width = this.refs.tasks.getDOMNode().offsetWidth;
        console.log('width: ' + width);
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
        let styles = this.styles;
        let { wordsError, numericError, urlError } = this.errorMessages;
        let textStyle = { width: this.state.textWidth};

        return (
            <div style={styles.paper}>
                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    style={styles.form} >
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="box box-container">
                                <div className="row">
                                    <div className="col-xs-10 col-sm-5 col-md-5 col-lg-5">
                                        <div className="box-first box-container box-big">
                                            <FormsyText style={textStyle}
                                                name='nameTitle'
                                                required
                                                hintText="What is project's title?"
                                                floatingLabelText="Title" />

                                            <FormsyText style={textStyle}
                                                name='nameOutcome'
                                                required
                                                hintText="What is the expected outcome?"
                                                floatingLabelText="Expected outcome" />
                                        </div>
                                    </div>
                                    <div className="col-xs-10 col-sm-5 col-md-5 col-lg-5" ref="tasks">
                                        <span className="collapse-card__subtitle">Identify the first few steps ...</span>
                                        <div className="box-first box-container box-big">
                                            <ul>
                                                <li><i className="zmdi zmdi-n-1-square"></i><FormsyText style={textStyle} name="task1"/></li>
                                                <li><i className="zmdi zmdi-n-2-square"></i><FormsyText style={textStyle} name="task2"/></li>
                                                <li><i className="zmdi zmdi-n-3-square"></i><FormsyText style={textStyle} name="task3"/></li>
                                                <li><i className="zmdi zmdi-n-4-square"></i><FormsyText style={textStyle} name="task4"/></li>
                                                <li><i className="zmdi zmdi-n-5-square"></i><FormsyText style={textStyle} name="task5"/></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 align-bottom">
                                        <div className="box-first box-container">
                                            <FlatButton
                                                style={styles.submit}
                                                type="submit"
                                                label="Next"
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
