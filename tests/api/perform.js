describe('perform() example', function () {

  it('demo test', function (browser) {
    browser
      .navigateTo('https://nightwatchjs.org/')
      // self-completing callback
      .perform(function () {
        console.log('1. perform command');
        // without any defined parameters, perform
        // completes immediately (synchronously)
      })

      // returning a Promise
      .perform(async function () {
        const sessionId = await browser.sessionId;
        console.log('2. perform with promise', sessionId);
      });
  });

  it('demo test async', async function (browser) {
    const result = await browser.perform(async function () {
      return 100;
    });

    browser.assert.strictEqual(result, 100);
  });
});
