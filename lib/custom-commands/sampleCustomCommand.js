const {Logger} = require('nightwatch');

module.exports = class Command {
  command() {
    Logger.log(' > hello from custom command');

    return Promise.resolve();
  }
}