

var SortableList = React.createClass({
    mixins: [SortableMixin],

    getInitialState: function() {
        return {
            items: ['Mixin', 'Sortable']
        };
    },

    handleSort: function (e) {
        console.log('handleSort');
        console.dir(e);
    },
    render: function() {
        return <div>
            {this.props.list}
            </div>
    }
});