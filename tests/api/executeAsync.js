describe('executeAsyncScript() example test', function () {

  it('demo test', function (browser) {
    browser
      .navigateTo('https://nightwatchjs.org/')
      .executeAsync(function (done) {
        setTimeout(function () {
          done(true);
        }, 500);
      }, function (result) {
        browser.assert.strictEqual(result.value, true);
        console.log('    result:', result);
      });
  });
});
