describe('frame() example test', function () {

  it('.frame() test with ID', function (browser) {
    const frameId = 0;

    browser
      .navigateTo('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe')
      .ensure.ableToSwitchToFrame(frameId)
      .frame(frameId, function (result) {
        console.log(result);
      })
      .assert.visible('#editor-container')
      .end();
  });

  // with css selector
  it('.frame() test with CSS selector', function (browser) {
    const frameId = 'iframe.interactive';

    browser
      .navigateTo('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe')
      .frame(frameId, function (result) {
        console.log(result);
      })
      .assert.visible('#editor-container')
      .end();
  });
});
