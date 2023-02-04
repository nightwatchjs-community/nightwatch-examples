describe('setGeolocation() example test', function () {
  it('demo test', function (browser) {
    browser
      // Set location of Tokyo, Japan
      .setGeolocation({
        latitude: 35.689487,
        longitude: 139.691706,
        accuracy: 100
      })
      .navigateTo('https://www.gps-coordinates.net/my-location')
      .pause(3000);
  });
});
