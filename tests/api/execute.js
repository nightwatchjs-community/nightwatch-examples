describe('execute() example test', function() {

  it('demo test', async function (browser) {
    await browser
      .url('https://nightwatchjs.org')
      .waitForElementPresent('body')

      // execute the function
      .execute(function() {document.title = 'Nightwatch.js'})

      .waitUntil(async function () {
        const title = await this.execute(function() {
          return document.title;
        });

        console.log('  page title is:', title);

        return title === 'Nightwatch.js';
      }, 1000);
  });

});