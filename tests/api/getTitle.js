describe('getTitle() example test', function () {

  before(browser => browser.navigateTo('https://nightwatchjs.org/'));

  it('demo test', async function (browser) {
    const title = await browser.getTitle();
    await browser.assert.equal(title, 'Nightwatch.js | Node.js powered End-to-End testing framework');
  });
});
