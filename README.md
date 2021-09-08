## Introduction
![Screenshot](https://i.imgur.com/CUomBwB.jpg)
This simple project will monitor the free/used memory in a 5s cycle.
Packages used: [Chalk](https://www.npmjs.com/package/chalk "Chalk") & [OS-Monitor](https://www.npmjs.com/package/OS-Monitor "OS-Monitor")

## Install & Run!
Firstly, install all of dependencies using this command:

```sh
npm i
```

The latest version of each package will be downloaded, according to "**package.json**" file.

To install packages individually:
```sh
npm install --save os-monitor
npm install --save chalk
```
     
After installation, head to the directory in which your project has been stored. (Using Command Prompt / Terminal)

```sh
cd C:\path\memorymonitor
```
     
Then enter one of the following commands to run the program:

```sh
node index.js
npm start
```
     
*npm start* is defined as a script in **package.json** file.

The program will be running and would log the memory state every 5 seconds.

## Copyright
This project is under MIT license. :)