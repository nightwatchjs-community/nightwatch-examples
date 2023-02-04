describe('getValue() example test', function () {

  beforeEach(browser => browser.navigateTo('https://middlemarch.netlify.app/'));

  it('demo test', function (browser) {
    browser
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')

      .getValue('input[type=search]', function (result) {
        console.log('result', result);
      })
      // with explicit locate strategy
      .getValue('css selector', 'input[type=search]', function (result) {
        console.log('result', result);
      });
  });

  it('demo test async', async function (browser) {
    await browser
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch');

    const result = await browser.getValue('input[type=search]');
    console.log('Value:', result);
  });

  // with selector object
  it('demo test', async function (browser) {
    await browser
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch');

    const result = await browser.getValue({
      selector: 'input[type=search]'
    });
    console.log('Value:', result);
  });
});
