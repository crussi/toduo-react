let { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

NonActionableForm = React.createClass({
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
            canSumbit: false
        };
    },

    //errorMessages: {
    //    wordsError: "Please only use letters",
    //    numericError: "Please provide a number"
    //
    //},

    styles: {
        container: {
            //width: '100%',
            //margin: 0,
            //padding: 0,
            //position: 'relative',
            minHeight: '160px'
        },
        inner: {
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '12px'
        },
        submit: {
            marginTop: 32
        },
        radio: {
            //marginTop: '6px',
            marginBottom: '12px'
            //marginLeft: '10px'
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
        let taskType = data.nonactionableGroup;
        data.Title = this.props.title;
        data.TaskType = taskType;
        switch (taskType) {
            case "Someday":
                this.moveToSomeday(data);
                break;
            case "Reference":
                this.moveToReference(data);
                break;
            case "Trash":
                this.moveToTrash(data);
                break;
        }

    },
    moveToSomeday(data) {
        console.log('move to someday');
        //TODO: this should not be hard coded
        data.route = "/someday";

        Meteor.call("/tasks/addNew", data, (err, res) => {
            console.log('meteor.call projects addNew');
            if (err) {
                console.log("Failed to add new task.");
                return;
            } else {
                console.log("task add success id: " + res._id);
                sessionStore.set("transition-new",res);
                this.props.handleNextStep("NonActionable." + data.TaskType);

            }
        });
    },
    moveToReference(data) {
        console.log('move to reference');
        //TODO: this should not be hard coded
        data.route = "/lists/reference";

        Meteor.call("/references/addNew", data, (err, res) => {
            console.log('meteor.call reference addNew');
            if (err) {
                console.log("Failed to add new reference.");
                console.dir(err);
                return;
            } else {
                console.log("reference add success id: " + res._id);
                sessionStore.set("transition-new",res);
                this.props.handleNextStep("NonActionable." + data.TaskType);
            }
        });
    },
    moveToTrash(data) {
        console.log('move to trash');
        //TODO: this should not be hard coded
        data.route = "/lists/trash";

        Meteor.call("/trash/addNew", data, (err, res) => {
            console.log('meteor.call trash addNew');
            if (err) {
                console.log("Failed to add new trash.");
                console.dir(err);
                return;
            } else {
                console.log("trash add success id: " + res._id);
                sessionStore.set("transition-new",res);
                this.props.handleNextStep("NonActionable." + data.TaskType);
            }
        });
    },
    notifyFormError: function (data) {
        console.error('Form error:', data);
    },
    //handleResize: function(e) {
    //    this.adjustTextWidth();
    //},

    //adjustTextWidth: function() {
    //    let width = this.refs.tasks.getDOMNode().offsetWidth;
    //    console.log('width: ' + width);
    //    this.setState({
    //        textWidth: (width - 40) + 'px'
    //    });
    //},
    //componentDidMount: function () {
    //    window.addEventListener('resize', this.handleResize);
    //    //this.adjustTextWidth();
    //},
    //componentWillUnmount: function() {
    //    window.removeEventListener('resize', this.handleResize);
    //},
    render: function () {
        //console.log('ProjectForm render');

        //Here is how to apply styles to text fields:
        //style={{color:'blue'}} hintStyle={{color:'red'}} underlineStyle={{borderColor:'green'}} underlineFocusStyle={{borderColor:'purple'}}
        //floatingLabelStyle={{color:'yellow'}}
        let styles = this.styles;
        //let { wordsError, numericError, urlError } = this.errorMessages;
        //let textStyle = { color:'orange', width: this.state.textWidth};
        //let hintStyle = this.styles.hint;
        //let underlineStyle = this.styles.underline;
        //console.dir(underlineStyle);
        //TODO: this needs to be put in a utility!
        //var timestamp = (new Date()).getTime();
        //let today = new Date(timestamp);
        //let minDate = new Date();
        //let maxDate = new Date();
        //set datepicker date range to be only 11 years
        //1 past 10 future
        //minDate.setDate(today.getDate());
        //minDate.setFullYear(minDate.getFullYear() - 1);
        //maxDate.setDate(today.getDate());
        //maxDate.setFullYear(minDate.getFullYear() + 11);
        let childProps = {
            callback: this.handleClick,
            hasPrev: true
        };
        //console.log('minDate: ' + minDate);
        //console.log('maxDate: ' + maxDate);
        return (
            <div style={styles.container}>

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    style={styles.form} >
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 " style={styles.container}>
                            <div className="box box-container step">
                                <div className="row">
                                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                        <div className="box-first box-container" style={styles.inner}>
                                            <FormsyRadioGroup name="nonactionableGroup" defaultSelected="Someday">
                                                <FormsyRadio
                                                    value="Someday"
                                                    label="I'll do this someday / maybe"
                                                    style={styles.radio}/>
                                                <FormsyRadio
                                                    value="Reference"
                                                    label="Keep for reference"
                                                    style={styles.radio}/>
                                                <FormsyRadio
                                                    value="Trash"
                                                    label="Move to trash"
                                                    style={styles.radio} />

                                            </FormsyRadioGroup>

                                        </div>
                                    </div>

                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 align-bottom">
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
