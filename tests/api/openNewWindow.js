describe('openNewWindow() example test', function () {

  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/'));
  afterEach(browser => browser.end());

  it('demo test new window', function (browser) {
    browser
      .openNewWindow()
      .windowHandles(function(result) {
        expect(result.value).to.have.length(2);
      });
  });

  it('demo test new tab', async function (browser) {
    await browser.openNewWindow('tab').pause(1000);

    const handles = browser.windowHandles();
    await expect(handles).to.have.length(2);
  });
});
