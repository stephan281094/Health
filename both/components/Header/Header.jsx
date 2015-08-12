Header = React.createClass({
    render: function() {
        'use strict'
        return (
            <header className='Header'>
                <b>Header</b> &nbsp;
                <a href="/">Home</a> &nbsp;
                <a href="/bad-url">Not Found Page</a> &nbsp;
            </header>
        );
    }
});
