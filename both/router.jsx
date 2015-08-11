FlowRouter.route('/', {
    action() {
        ReactLayout.render(MainLayout, { content: <Home /> });
    }
});

FlowRouter.notFound = {
    action() {
        ReactLayout.render(MainLayout, { content: <NotFound /> });
    }
};
