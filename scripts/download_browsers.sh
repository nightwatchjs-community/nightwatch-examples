#!/bin/bash
set -ex

#=========
# Install Google Chrome
#=========
wget --no-verbose -O /tmp/browser_chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

#=========
# Install Firefox
#=========
#FIREFOX_VERSION=92.0.1
#wget --no-verbose -O /tmp/browser_firefox.tar.bz2 https://download-installer.cdn.mozilla.net/pub/firefox/releases/$FIREFOX_VERSION/linux-x86_64/en-US/firefox-$FIREFOX_VERSION.tar.bz2
