describe('sendKeys() example test', function () {
  it('demo test', function (browser) {
    browser
      .navigateTo('https://www.ecosia.org/')
      // send some simple text to an input
      .sendKeys('input[type=search]', 'nightwatch')
      .assert.valueEquals('input[type=search]', 'nightwatch')
      // send some text to an input and hit enter
      .sendKeys('input[type=search]', ['nightwatch', browser.Keys.ENTER]);
  });
});
