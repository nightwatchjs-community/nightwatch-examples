# Nightwatch.js Examples

[![npm](https://img.shields.io/npm/v/nightwatch.svg)](https://www.npmjs.com/package/nightwatch)
[![Node.js CI](https://github.com/nightwatchjs/nightwatch-examples/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/nightwatchjs/nightwatch-examples/actions/workflows/node.js.yml)
[![Discord][discord-badge]][discord]

<p align="center">
  <img alt="Nightwatch.js Logo" src=".github/assets/nightwatch-logo.svg" width=300 />
</p>

#### [Homepage](https://nightwatchjs.org) &bullet; [Developer Guide](https://nightwatchjs.org/guide) &bullet; [API Reference](https://nightwatchjs.org/api) &bullet; [About](https://nightwatchjs.org/about) &bullet; [Blog](https://nightwatchjs.org/blog)

This is a Github Actions enabled sample project which runs the examples bundled with Nightwatch 2 in Google Chrome.

## Run the Tests

Clone the repository or click the "Use this template" button. Then install the dependencies and run the tests:

```
npm install
```

This will run the tests in Chrome:

```sh
npm test
```

The generated HTML report is deployed automatically to:

https://nightwatchjs-community.github.io/nightwatch-examples

[discord-badge]: https://img.shields.io/discord/618399631038218240.svg?color=7389D8&labelColor=6A7EC2&logo=discord&logoColor=ffffff&style=flat-square
[discord]: https://discord.gg/SN8Da2X

## Reporting

Nightwatch 2.2 brings its own HTML reporter which better aggregate test results in a user-friendly HTML view. Read more about [using HTML reporter](https://nightwatchjs.org/guide/reporters/use-html-reporter.html)

### Preview
<img width="800" alt="html-report" src="https://user-images.githubusercontent.com/28780767/175522607-a5927cda-8f70-4d09-9827-462f2bf67e26.png">


### Publishing HTML Test Report using Github
Github actions can be used to run your nightwatch tests and publish your test report to Github Pages
Here is the [test report](https://nightwatchjs-community.github.io/nightwatch-examples) generated using Github Actions and Pages.

Checkout the [Blog](https://nightwatchjs.org/blog/publish-your-nightwatch-html-report-on-github-pages/) about setting up Nightwatch tests on Github Actions and publishing test report on Github Pages



