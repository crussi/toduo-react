
const {
    RaisedButton,
    FontIcon,
    Avatar,
    AppBar,
    LeftNav,
    MenuItem,
    IconButton


    } = mui;

//const Colors = mui.Styles.Colors;
//const ThemeManager = new mui.Styles.ThemeManager();

const styles = {
    contentHeaderMenuLink: {
        textDecoration: 'none',
        color: 'white',
        padding: 8,
    },
};

const suggestions = [
    'mac pro',
    'mac mini',
    'macbook',
    'macbook air',
    'macbook pro'
];

SidebarApp = React.createClass({
    mixins: [ReactMeteorData],
    getInitialState() {
        return {
            docked: false,
            open: false,
            transitions: true,
            touch: true,
            touchHandleWidth: 20,
            dragToggleDistance: 30,
            inboxValue:''
        };
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext(){
        return {
            muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
        }
    },
    getMeteorData() {
        return {
        //    players: Players.find({}, { sort: { score: -1, name: 1 } }).fetch(),
        //    selectedPlayer: Players.findOne(this.state.selectedPlayerId)
        }
    },
    toggleOpen(ev) {
        this.setState({open: !this.state.open});

        if (ev) {
            ev.preventDefault();
        }
    },
    onSetOpen(open) {
        this.setState({open: open});
    },
    componentDidMount() {
        let mql = window.matchMedia(`(min-width: 800px)`);
        mql.addListener(this.mediaQueryChanged);
        this.setState({mql: mql, docked: mql.matches});
    },

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    },

    mediaQueryChanged() {
        this.setState({docked: this.state.mql.matches});
    },

    menuButtonClick(ev) {
        ev.preventDefault();
        this.onSetOpen(!this.state.open);
    },

    renderPropCheckbox(prop) {
        let toggleMethod = (ev) => {
            let newState = {};
            newState[prop] = ev.target.checked;
            this.setState(newState);
        };

        return (
            <p key={prop}>
                <input type='checkbox' onChange={toggleMethod} checked={this.state[prop]} id={prop} />
                <label htmlFor={prop}> {prop}</label>
            </p>);
    },

    renderPropNumber(prop) {
        let setMethod = (ev) => {
            let newState = {};
            newState[prop] = parseInt(ev.target.value);
            this.setState(newState);
        };

        return (
            <p key={prop}>
                {prop} <input type='number' onChange={setMethod} value={this.state[prop]} />
            </p>);
    },
    onChange(input, resolve) {
        // Simulate AJAX request
        //setTimeout(() => {
        //    resolve(suggestions.filter((suggestion) =>
        //            suggestion.match(new RegExp('^' + input.replace(/\W\s/g, ''), 'i'))
        //    ));
        //}, 25);
    },
    onSubmit(input) {
        if (!input) return;
        console.info("Parent onSubmit input: " + input);
        Meteor.call("/inbox/addNew", input, (err, res) => {
            console.log('meteor.call inbox addNew');
            if (err) {
                console.log("Failed to add new input task.");
                return;
            }

            //input.value = "";
        });
    },
    render() {
        //console.log('sidebarapp render');
        let sidebar = <SidebarContent routestate={this.props.routestate} />;

        let contentHeader = (
            <span>
        {!this.state.docked &&
        <a onClick={this.menuButtonClick} href='#' style={styles.contentHeaderMenuLink}><i className="zmdi zmdi-menu"></i></a>}
                <span><form>
                    <SearchBar
                        placeholder="Inbox input ..."
                        onChange={this.onChange}
                        onSubmit={this.onSubmit} />
                </form></span>
      </span>);

        let sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            open: this.state.open,
            touch: this.state.touch,
            touchHandleWidth: this.state.touchHandleWidth,
            dragToggleDistance: this.state.dragToggleDistance,
            transitions: this.state.transitions,
            onSetOpen: this.onSetOpen,
        };

        return (
            <Sidebar {...sidebarProps}>
                <TitlePanel title={contentHeader} >
                    {this.props.content()}
                </TitlePanel>
            </Sidebar>
        );
    }
});

