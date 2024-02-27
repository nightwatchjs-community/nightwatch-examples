describe('.closeWindow() example test', function () {

  beforeEach(browser => browser.navigateTo('https://the-internet.herokuapp.com/windows'));
  afterEach(browser => browser.end());

  it('basic window test', function (browser) {
    browser
      .windowHandles(result => {
        expect(result.value).to.have.length(1);
      })
      .waitForElementVisible('a[target="_blank"]', 1000)
      .click('a[target="_blank"]')
      .windowHandles(result => {
        expect(result.value).to.have.length(2);
      })
      .closeWindow(function (result) {
        console.log('    closeWindow result', result);
      })
      .windowHandles(result => {
        expect(result.value).to.have.length(1);
      });

  });

  it('async window test', async function (browser) {
    await browser
      .waitForElementVisible('a[target="_blank"]', 1000)
      .click('a[target="_blank"]')

    let windowHandles = await browser.windowHandles();
    expect(windowHandles).to.have.length(2);

    await browser.switchWindow(windowHandles[1]);
    await browser.closeWindow();

    windowHandles = await browser.windowHandles();
    expect(windowHandles).to.have.length(1);
  });
});
