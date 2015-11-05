let { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup, FormsySelect, FormsyText, FormsyTime, FormsyToggle } = FMUI;
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const {
    TextField
    } = mui;
ProjectForm = React.createClass({
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
    //addTask: function(project, task) {
    //    if (task && task.trim().length > 0) {
    //        project.Tasks.push({"Task":task, "IsComplete":0});
    //    }
    //},
    //createProject: function(data) {
    //    let project = {};
    //    project.Title = data.Title;
    //    project.Outcome = data.Outcome;
    //    project.DateDue = data.DateDue;
    //    project.PctComplete = 0.00;
    //    project.IsComplete = 0;
    //    project.Tasks = [];
    //    this.addTask(project,data.Task1);
    //    this.addTask(project,data.Task2);
    //    this.addTask(project,data.Task3);
    //    this.addTask(project,data.Task4);
    //    this.addTask(project,data.Task5);
    //    return project;
    //},
    submitForm: function (data) {
        //console.dir(data);
        //alert(JSON.stringify(data, null, 4));
        //let project = this.createProject(data);
        //console.dir(project);
        //if (!data) return;
        //console.info("Parent onSubmit input: " + input);
        data.Title = "Complete Michele's planter box";
        data.Outcome = "Michele will have a place to plant plants.";
        data.dateDue = "2015-11-01";
        data.Task1 = "Buy garden soil";
        data.Task2 = "Mix with soil ammendments";
        data.Task3 = "Fill to overflowing";
        //let projectId;

        Meteor.call("/projects/addNew", data, (err, res) => {
            console.log('meteor.call projects addNew');
            if (err) {
                console.log("Failed to add new project.");
                return;
            } else {
                console.log("project add success id: " + res);
                //projectId = res;
                sessionStore.set("project-new",res);
                this.props.handleSubmit();
            }
        });
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
        //console.log('ProjectForm render');

        //Here is how to apply styles to text fields:
        //style={{color:'blue'}} hintStyle={{color:'red'}} underlineStyle={{borderColor:'green'}} underlineFocusStyle={{borderColor:'purple'}}
        //floatingLabelStyle={{color:'yellow'}}
        let styles = this.styles;
        let { wordsError, numericError, urlError } = this.errorMessages;
        let textStyle = { color:'orange', width: this.state.textWidth};
        let hintStyle = this.styles.hint;
        let underlineStyle = this.styles.underline;
        //console.dir(underlineStyle);
        //TODO: this needs to be put in a utility!
        var timestamp = (new Date()).getTime();
        let today = new Date(timestamp);
        let minDate = new Date();
        let maxDate = new Date();
        //set datepicker date range to be only 11 years
        //1 past 10 future
        minDate.setDate(today.getDate());
        minDate.setFullYear(minDate.getFullYear() - 1);
        maxDate.setDate(today.getDate());
        maxDate.setFullYear(minDate.getFullYear() + 11);
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
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="box box-container">
                                <div className="row">
                                    <div className="col-xs-10 col-sm-5 col-md-5 col-lg-5">
                                        <div className="box-first box-container box-big">

                                            <FormsyText style={textStyle}
                                                name='Title'
                                                //required
                                                maxLength={25}
                                                hintText="What is project's title?"
                                                floatingLabelText="Title" />


                                            <FormsyText style={textStyle}
                                                name='Outcome'
                                                //required
                                                maxLength={100}
                                                hintText="What is the expected outcome?"
                                                floatingLabelText="Expected outcome" />

                                            <FormsyDate textFieldStyle={textStyle}
                                                name='DateDue'
                                                minDate={minDate} maxDate={maxDate}

                                                floatingLabelText="Date due" />

                                        </div>
                                    </div>
                                    <div className="col-xs-10 col-sm-5 col-md-5 col-lg-5" ref="tasks">
                                        <div className="collapse-card__sectiontitle ">Identify the first few steps ...</div>
                                        <div className="box-first box-container box-big">
                                            <ul>
                                                <li><i className="zmdi zmdi-n-1-square"></i><FormsyText style={textStyle} hintStyle={hintStyle} underlineStyle={underlineStyle} name="Task1" /></li>
                                                <li><i className="zmdi zmdi-n-2-square"></i><FormsyText style={textStyle} hintStyle={hintStyle} underlineStyle={underlineStyle} name="Task2"/></li>
                                                <li><i className="zmdi zmdi-n-3-square"></i><FormsyText style={textStyle} hintStyle={hintStyle} underlineStyle={underlineStyle} name="Task3"/></li>
                                                <li><i className="zmdi zmdi-n-4-square"></i><FormsyText style={textStyle} hintStyle={hintStyle} underlineStyle={underlineStyle} name="Task4"/></li>
                                                <li><i className="zmdi zmdi-n-5-square"></i><FormsyText style={textStyle} hintStyle={hintStyle} underlineStyle={underlineStyle} name="Task5"/></li>
                                            </ul>
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
