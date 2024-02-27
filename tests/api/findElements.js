describe('findElements() example test', function () {
  it('demo test async', async function (browser) {
    await browser.navigateTo('https://nightwatchjs.org/');
    const resultElements = await browser.findElements('.navigation .navigation-list');

    await expect(resultElements).to.have.length(2);

    resultElements.forEach((item) => console.log('Element Id:', item.getId()));
  });
});

