# What is create react app

Files in my project. Files that contain code that browsers don't know how to execute.

1. index.js -> contains jsx code2.
2. App.js -> contains jsx code.
3. ReportWebVitals.js

JSX is not valid code - our browsers don't know how to exeute jsx code. So if I try to execute jsx I'll get syntax error.
We write jsx as its convenient for us to write components.
Since broswers can't execute jsx we need to transpile our code so changing it from one type of code to another type of code. The thing that is doing this process is called: Dev Server
This server will take the above files and auto and turn them into valid JavaScript syntax. The tools are:

1. Bable,
2. Webpack -> this will merge all 3 files into one single file called: bundle.js file.

Most of the files and dir are not required to run a basic react app so in next video will delete some of them. Only 5 are required to run an react app.

1. index.js -> gets executed when app runs.
2. index.html -> skeleton for React App.
3. package.json -> list dependencies that our app needs.
4. package-lock.json -> list dependencies that our app needs.
5. node-modules -> dependencies our app needs.
