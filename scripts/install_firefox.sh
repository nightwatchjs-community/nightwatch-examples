#!/bin/bash
set -ex

#=========
# Firefox
#=========
FIREFOX_VERSION=92.0.1
sudo apt-get update -qqy \
  && sudo apt-get -qqy --no-install-recommends --fix-missing install firefox \
  && sudo rm -rf /var/lib/apt/lists/* /var/cache/apt/* \
  && sudo apt-get -y purge firefox \
  && sudo rm -rf /opt/firefox \
  && sudo tar -C /opt -xjf /tmp/browser_firefox.tar.bz2 \
  && sudo mv /opt/firefox /opt/firefox-$FIREFOX_VERSION \
  && sudo ln -fs /opt/firefox-$FIREFOX_VERSION/firefox /usr/bin/firefox
