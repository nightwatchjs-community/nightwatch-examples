test('deleteCookies() example test', async function (browser) {

  await browser
    .navigateTo('https://nightwatchjs.org/')
    .setCookie({
      name: 'test_cookie',
      value: '1'
    })
    .expect.cookie('test_cookie').toEqual('1')
    .deleteCookies(function () {
      console.log('  >> cookies deleted');
    });

  const cookies = await browser.getCookies();
  expect(cookies).to.have.length(0);

});
