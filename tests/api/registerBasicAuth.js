describe('registerBasicAuth() example test', function () {

  it('registerBasicAuth test', function (browser) {
    browser
      .registerBasicAuth('admin', 'admin')
      .navigateTo('https://the-internet.herokuapp.com/basic_auth')
      .waitForElementVisible('#content');
  });
});
