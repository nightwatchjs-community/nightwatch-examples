describe('windowPosition() example test', function () {

  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/__e2e/window/'));

  it('demo test', function (browser) {
    browser
      .windowPosition('current', function (result) {
        console.log('windowPosition current:', result.value);
      });
  });
});
