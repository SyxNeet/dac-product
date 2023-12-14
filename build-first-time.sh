#!/bin/bash

npm install -g pm2

npm install

npm run build

pm2 start “npm run start” —name dac
