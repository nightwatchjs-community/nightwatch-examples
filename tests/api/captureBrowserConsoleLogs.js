test('captureBrowserConsoleLogs() example test', function (browser) {

  browser
    .captureBrowserConsoleLogs((event) => {

      expect(event.args, 'Expected captureBrowserConsoleLogs() event args to be an array').to.be.an('array');
      expect(event.args).to.have.length(1);
      expect(event.args[0].value).to.equal('here');

      console.log(' Console message type: ' + event.type, '; timestamp: ' + event.timestamp, '; message: ' + event.args[0].value);
    })
    .navigateTo('https://www.google.com')
    .executeScript(function () {
      console.error('here');
    });

});