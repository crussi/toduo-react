
Meteor.startup(function () {
  sessionStore = new ReactiveDict();
  injectTapEventPlugin();
  //console.log('startup render sidebarapp');
  //React.render(<App />, document.getElementById("container"));
  React.render(<SidebarApp />, document.getElementById("container"));
  //React.render(<BrowserApp />, document.getElementById("container"));
});