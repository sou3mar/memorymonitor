## Introduction

This simple project will monitor the free/used memory in a 5s cycle.

Packages used: [Chalk](https://www.npmjs.com/package/chalk "Chalk") & [OS-Monitor](https://www.npmjs.com/package/OS-Monitor "OS-Monitor")

## Install & Run!

First, to install all of dependencies, use this command:

     npm install

The latest version of each package will be downloaded, according to "**package.json**" file!


To install packages individually:

     npm install --save os-monitor
     npm install --save chalk
     
After installation, head to the directory in which your project has been stored! (Using Command Prompt / Terminal) You can easily use this command in Windows & it works on GNU/Linux distributions as Well!

     cd C:\example\
     
Then enter one of the followings:

     node index.js
     or
     npm start
     
"*npm start*" is defined as a script in **package.json** file!
     
The project will be running and would show the memory state every 5 seconds!

## Copyright

This project is under MIT license. :)