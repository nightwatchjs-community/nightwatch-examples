test('acceptAlert() example test', function (browser) {
  browser
    .navigateTo('https://nightwatchjs.org/__e2e/window/alerts.html')
    .click('#show-alert')
    .ensure.alertIsPresent('> there is an alert open')
    .pause(500)
    .acceptAlert()
    .ensure.not.alertIsPresent('', 500);
});

