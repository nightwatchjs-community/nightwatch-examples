describe('.switchToWindow() example test', function () {

  beforeEach(browser => browser.navigateTo('https://example.com'));
  afterEach(browser => browser.end());

  it('async window test', async function (browser) {
    await browser
      .pause(2000)
      .execute(function () {
        document.querySelector('a[href="https://www.iana.org/domains/example"]').target = '_blank';
      })
      .click('a[href="https://www.iana.org/domains/example"]')


    let windowHandles = await browser.windowHandles();
    browser.assert.equal(windowHandles.length, 2);

    await browser.switchWindow(windowHandles[1]);

    let url = await browser.url();
    browser.assert.equal(url, 'https://www.iana.org/help/example-domains');

    await browser.pause(3000);
  });
});
