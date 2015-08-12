MainLayout = React.createClass({
    render: function() {
        'use strict'
        return (
            <div>
                <Header />
                <main>{this.props.content}</main>
            </div>
        );
    }
});
