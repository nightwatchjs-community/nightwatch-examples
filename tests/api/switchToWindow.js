describe('.switchToWindow() example test', function () {

  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/__e2e/window/'));
  afterEach(browser => browser.end());

  it('async window test', async function (browser) {
		await browser.pause(2000);
    await browser.click('#openWindowBttn');

    let windowHandles = await browser.windowHandles();
    browser.assert.equal(windowHandles.length, 2);

    await browser.switchWindow(windowHandles[1]);
    await browser.waitForElementVisible('form');

		await browser.pause(3000);
  });
});
