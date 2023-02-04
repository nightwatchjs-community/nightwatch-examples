describe('elementActive() example test', function () {
  it('demo test async', async function (browser) {
    const result = await browser
      .navigateTo('https://nightwatchjs.org/')
      .elementActive();

    console.log('element active:', result);
  });
});
