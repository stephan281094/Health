// Router API https://github.com/meteorhacks/flow-router
// Layout API https://github.com/kadirahq/meteor-react-layout

FlowRouter.route("/", {
  action() {
    ReactLayout.render(MainLayout, { content: <Home /> });
  }
});

FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound /> });
  }
};
