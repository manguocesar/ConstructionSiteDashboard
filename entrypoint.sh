#!/bin/sh

npm install
npm install -g serve
npm build
serve -s build -l 3000
