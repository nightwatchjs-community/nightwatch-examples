test('dismissAlert() example test', function (browser) {
  const buttonSelector = 'button[onclick="jsAlert()"]';

  browser
    .navigateTo('https://the-internet.herokuapp.com/javascript_alerts')
    .click(buttonSelector)
    .ensure.alertIsPresent('> there is an alert open')
    .pause(500)
    .dismissAlert(function (result) {
      console.log(result);
    })
    .ensure.not.alertIsPresent('');
});
