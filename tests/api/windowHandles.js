describe('.windowHandles() example test', function () {

  beforeEach(browser => browser.url('https://example.com'));

  afterEach(browser => browser.end());

  it('opens a new window when clicking a link', async function (browser) {

    await browser
      .windowHandles(result => {
        browser.assert.equal(result.value.length, 1);
      })
      .execute(function () {
        // modify <a> element to open link in a new tab
        document.querySelector('a[href="https://www.iana.org/domains/example"]').target = '_blank';
      })
      .click('a[href="https://www.iana.org/domains/example"]')
      .windowHandles(result => {
        browser.assert.equal(result.value.length, 2);
      })
      .windowHandles(function (result) {
        console.log('result:', result);
      });
  });

  it('can interact with elements in the new window', async function (browser) {

    await browser.execute(function () {
      // modify <a> element to open link in a new tab
      document.querySelector('a[href="https://www.iana.org/domains/example"]').target = '_blank'; // Link to another page
    });

    await browser.click('a[href="https://www.iana.org/domains/example"]');

    let result = await browser.windowHandles();
    browser.assert.equal(result.length, 2);

    console.log('result:', result);
    await browser.switchWindow(result[1]);

    await browser.waitForElementVisible('#header');
    browser.assert.visible('#header');
  });
});