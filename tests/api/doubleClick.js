test('doubleClick() example test', function (browser) {
  browser
    .navigateTo('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
    .assert.not.hasClass('aside', 'large')
    .doubleClick('aside')
    .assert.hasClass('aside', 'large');
});
