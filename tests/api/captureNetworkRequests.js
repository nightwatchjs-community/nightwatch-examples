test('captureNetworkRequests() example test', function (browser) {

  this.requestCount = 1;

  browser
    .captureNetworkRequests((requestParams) => {
      console.log('Request Number:', this.requestCount++);
      console.log('Request URL:', requestParams.request.url);
      console.log('Request method:', requestParams.request.method);
      console.log('Request headers:', requestParams.request.headers);
    })
    .navigateTo('https://mdn.github.io/web-components-examples/popup-info-box-web-component/');

});
