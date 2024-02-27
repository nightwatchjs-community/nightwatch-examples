test('captureBrowserExceptions() example test', async function (browser) {

  let eventData;

  await browser.captureBrowserExceptions((event) => {
    eventData = event;
    console.log('>>> Exception:', event);
  });

  await browser.navigateTo('https://the-internet.herokuapp.com/windows');

  const buttonIdAttr = await browser.executeScript(function () {
    // Create a new button
    const button = document.createElement('button');
    button.innerText = 'Test Button';
    button.id = 'testButton';
    button.setAttribute('onclick', 'throw new Error("Test error.")');

    // Append the button to the body
    document.body.appendChild(button);

    // Return the button's `id` attribute so we can use it later
    return button.id;
  });

  await browser
    .waitForElementVisible(`#${buttonIdAttr}`, 1000) // wait for the button to be visible
    .click(`#${buttonIdAttr}`)
    .perform(function () {
      expect(eventData).is.an('object').and.not.null;
      expect(eventData).to.have.own.property('exceptionDetails');

      const { exceptionDetails } = eventData;
      expect(exceptionDetails.exception.description).to.include('Test error');
    });

});