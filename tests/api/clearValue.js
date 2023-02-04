describe('.clearValue() example test', function () {

  before(browser => browser.navigateTo('https://middlemarch.netlify.app/'));

  it('clear value', function (browser) {
    browser
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.valueEquals('input[type=search]', 'nightwatch')
      .clearValue('input[type=search]')
      .assert.valueEquals('input[type=search]', '');
  });

  it('clear value – using callback argument', function (browser) {
    browser
      .setValue('input[type=search]', 'nightwatch')
      .clearValue('input[type=search]', function (result) {
        console.log('clearValue result', result);
      })
      .assert.valueEquals('input[type=search]', '');
  });

  it('clear value – with explicit locate strategy', function (browser) {
    browser
      .setValue('input[type=search]', 'nightwatch')
      .clearValue('css selector', 'input[type=search]')
      .assert.valueEquals('input[type=search]', '');
  });

  it('clear value – with selector object', function (browser) {
    // see https://nightwatchjs.org/guide/writing-tests/finding-interacting-with-dom-elements.html#element-properties
    browser
      .setValue('input[type=search]', 'nightwatch')
      .clearValue({
        selector: 'input[type=search]',
        suppressNotFoundErrors: true
      })
      .assert.valueEquals('input[type=search]', '');
  });
});
