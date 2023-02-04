describe('windowHandle() example test', function () {

  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/__e2e/window/'));

  it('demo test', function (browser) {
    browser
      .windowHandle(function (result) {
        console.log('window handle:', result);
      });
  });

  it('demo test async', async function (browser) {
    const result = await browser.windowHandle();
    console.log('window handle:', result);
  });
});
