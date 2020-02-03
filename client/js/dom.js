/* eslint no-unused-vars: "off" */
/**
 * dom
 * =====================
 * Assign query selectory to global variable: dom
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 *
 * @license: This code and contributions have 'MIT License'
 *
 */
var dom = {
	id: function(selector) {
		return document.getElementById(selector.replace("#", ""));
	},
	class: function(selector) {
		return document.getElementsByClassName(selector.replace(".", ""));
	},
	name: function(selector) {
		return document.getElementsByName(selector);
	},
	tag: function(selector) {
		return document.getElementsByTagName(selector);
	},
	query: function(selector) {
		return document.querySelectorAll(selector);
	}
};