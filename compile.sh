#!/usr/bin/env bash
windicss './**/*.html' -cto windi.css --minify
cp app.windi.html public/index.html