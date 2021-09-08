'use strict';

const chalk		=	require('chalk')
const monitor	=	require('os-monitor')
const log     	=	console.log
const red     	=	chalk.bold.white.bgRed
const green   	=	chalk.bold.white.bgGreen
const blue    	=	chalk.bold.white.bgBlue
let   count     =	1

function formatBytes(a, b) {
	// 1 Gigabyte = 1024 Megabytes
	if(a === 0) return "0 Bytes"
	let c = 1024,
		d = b || 2,
		e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
		f = Math.floor(Math.log(a) / Math.log(c));
	return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}

function now() {
	let d = new Date(),
  		h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
		m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes(),
		s = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds()
	return h + ':' + m + ':' + s
}

monitor.start({
    delay: 5000, // delay in mili-seconds (currently 5 seconds)
    freemem: 1000000000, // minimum memory warning threshold (currently 1 GBs)
    immediate: true,
    silent: false
})

monitor.on('monitor', event => {
    let totalmem =	event.totalmem,
		freemem	 =	event.freemem,
		using	 =	formatBytes((totalmem - freemem), 3)
	
    if(count === 1) log(green(" Total Memory:") + " " + formatBytes(totalmem, 3)); // Show total memory on start
    log(blue(count) + red(" Free Memory:") + " " + formatBytes(freemem, 4) + " / Using: " + using + " / " + now());

    ++count;
})

monitor.on('freemem', () => {
	log(red(" • Warning:") + " Memory is less than 1 GBs!");
})