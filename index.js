"use strict";

const chalk=require("chalk");
const monitor=require("os-monitor");
const log=console.log;
const red=chalk.bold.white.bgRed;
const green=chalk.bold.white.bgGreen;
const blue=chalk.bold.white.bgBlue;
var count=1;

function formatBytes(a,b) {if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}

function now() {
  var d=new Date(),h=(d.getHours()<10?'0':'')+d.getHours(),m=(d.getMinutes()<10?'0':'')+d.getMinutes(),s=(d.getSeconds()<10?'0':'')+d.getSeconds();return h+':'+m+':'+s;
}

monitor.start({
    delay: 5000, // in ms
    freemem: 1000000000,
    immediate: true,
    silent: false
});

monitor.on('monitor',function(event) {
    var totalmem=event.totalmem,freemem=event.freemem,using=formatBytes(totalmem-freemem,3);
    if(count===1) log(green(" Total Memory:")+" "+formatBytes(totalmem,3));
    log(blue(count)+red(" Free Memory:")+" "+formatBytes(freemem,4)+" / Using: "+using+" / "+now());
    count++;
});

monitor.on('freemem', function(event) {
  log(red(" Warning:")+" Memory is less than 1GBs!");
});