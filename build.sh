#!/bin/bash

npm install

npm run build

pm2 reload dac
