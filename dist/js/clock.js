(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var clock=document.querySelector(".js-clock"),getTime=function(){var t=new Date,e=t.getHours(),c=t.getMinutes();clock.innerText="".concat(e>=10?e:"0".concat(e),":").concat(c>=10?c:"0".concat(c))},init=function(){getTime(),setInterval(getTime,1e3)};init();

},{}]},{},[1]);
