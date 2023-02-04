describe('frameParent() example test', function () {

  const frameElement = 'iframe.interactive';

  it('demo test', function (browser) {
    browser
      .navigateTo('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe')
      .assert.elementPresent(frameElement)
      .frame(frameElement, function() {
        console.log(' > Switched to the inner iframe');
      })
      .assert.visible('#editor-container')
      .frameParent(function (result) {
        console.log(' > Switched back to the parent frame');
      })
      .assert.visible('.main-wrapper');
  });
});

