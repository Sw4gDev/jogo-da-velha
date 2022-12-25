(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

//=============================================
//utility functions
arrayHas = function (arr, val) {
	// the val might be a single value or array of values

	if (Array.isArray(val)) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = val[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var i = _step.value;

				if (arr.indexOf(i) === -1) {
					return false;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return true;
	}

	if (arr.indexOf(val) === -1) {
		return false;
	}

	return true;
};
//=============================================

//This is the app module
//Module Dependencieds
'use strict';
var $ = require('jquery'),

//jQuery    = $,
bootstrap = require('bootstrap'),

//Module Variables
human,
    computer,
    arrayHas,
    gameGrid = {
	rows: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
	columns: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
	diagonal1: [[0, 4, 8]],
	diagonal2: [[2, 4, 6]]
},
    gamePoints = [0, 1, 2, 3, 4, 5, 6, 7, 8],
