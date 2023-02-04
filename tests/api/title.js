describe('title() example test', function () {
  beforeEach(browser => browser.navigateTo('https://nightwatchjs.org/'));

  it('demo test', function (browser) {
    browser.title(function (result) {
      console.log('Title:', result.value);
    });
  });

  it('demo test async', async function (browser) {
    const title = await browser.title();
    console.log('Title:', title);
  });
});
