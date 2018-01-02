/* eslint global-require: 0 */

const installModel = (app) => {
  app.model(require('./new'));
  app.model(require('./fixBar'));
  app.model(require('./list'));
  app.model(require('./detail'));
};

export {
  installModel,
};
