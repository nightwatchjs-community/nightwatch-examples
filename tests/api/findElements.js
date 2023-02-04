describe('findElements() example test', function () {
  it('demo test async', async function (browser) {
    await browser.navigateTo('https://nightwatchjs.org/');
    const resultElements = await browser.findElements('.nav-links-left .nav-item');

    await expect(resultElements).to.have.length(4);

    resultElements.forEach((item) => console.log('Element Id:', item.getId()));
  });
});
