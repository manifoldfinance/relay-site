#!/usr/bin/env bash
windicss './**/*.html' -cto windi.css --minify
git hash-object --no-filters hash.txt > BUILD_INFO
cp app.windi.html public/index.html