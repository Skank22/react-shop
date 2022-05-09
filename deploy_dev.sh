#!/bin/sh

ssh root@dev.raincheck.co <<EOF
  cd /opt/kbsite
  git reset --hard
  git pull origin master
  sudo npm install
  npm run build-prod
  exit
EOF