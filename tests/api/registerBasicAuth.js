describe('registerBasicAuth() example test', function () {

  it('registerBasicAuth test', function (browser) {
    browser
      .registerBasicAuth('test', 'test')
      .navigateTo('http://browserspy.dk/password-ok.php')
      .waitForElementVisible('#content');
  });
});
