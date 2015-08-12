FlowRouter.route('/', {
    action: function() {
        'use strict'
        ReactLayout.render(MainLayout, { content: <Home /> });
    }
});

FlowRouter.notFound = {
    action: function() {
        'use strict'
        ReactLayout.render(MainLayout, { content: <NotFound /> });
    }
};
