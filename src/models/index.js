const installModel = (app) => {
  app.model(require('./new'));
  app.model(require('./fixBar'));
};

export {
  installModel
};