/**
 * Shortcuts
 * =====================
 * List of Commands Event Listener
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 *
 * @license: This code and contributions have 'MIT License'
 *
 */

chrome.commands.onCommand.addListener(function(command) {
	switch (command) {
		case "toggle-fullscreen-mode":
			chrome.storage.local.get(["fullscreen"], function(data) {
				data.fullscreen == true ? chrome.storage.local.set({"fullscreen": false}) : chrome.storage.local.set({"fullscreen": true});
			});
		  break;
		case "toggle-force-default":
			chrome.storage.local.set({"aspect_x": "1"});
			chrome.storage.local.set({"aspect_y": "1"});
		  break;
		case "toggle-force-custom":
			chrome.storage.local.get(["aspect_x_custom", "aspect_y_custom"], function(data) {
				chrome.storage.local.set({"aspect_x": data.aspect_x_custom});
				chrome.storage.local.set({"aspect_y": data.aspect_y_custom});
			});
		  break;
		case "toggle-force-219":
			chrome.storage.local.set({"aspect_x": "1.33"});
			chrome.storage.local.set({"aspect_y": "1"});
		  break;
		case "toggle-force-329":
			chrome.storage.local.set({"aspect_x": "2"});
			chrome.storage.local.set({"aspect_y": "1"});
		  break;
		case "toggle-stretch":
			chrome.storage.local.set({"aspect_y": "1"});
		  break;
		case "toggle-crop":
			chrome.storage.local.get(["aspect_x"], function(data) {
				chrome.storage.local.set({"aspect_y": data.aspect_x});
			});
		  break;
		default:
		  // code block
	  }
});