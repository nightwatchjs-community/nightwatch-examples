test('getAlertText() example test', function (browser) {

  browser
    .navigateTo('https://nightwatchjs.org/__e2e/window/alerts.html')
    .click('#show-confirm')
    .ensure.alertIsPresent('> there is an alert open')
    .pause(500)
    .getAlertText(function (res) {
      browser.assert.strictEqual(res.value, 'Are you sure?');
    });

});
