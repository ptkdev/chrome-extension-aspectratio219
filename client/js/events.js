/**
 * Events
 * =====================
 * List of Event Listener
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 *
 * @license: This code and contributions have 'MIT License'
 *
 */

function tabs() {
	let tabs = dom.query(".tabs li");
	let tabs_content = dom.query(".tab-content");

	let deactvate_all_tabs = function() {
		tabs.forEach(function(tab) {
			tab.classList.remove("is-active");
		});
	};

	let hide_tabs_content = function() {
		tabs_content.forEach(function(tab_content) {
			tab_content.classList.remove("is-active");
		});
	};

	let activate_tabs_content = function(tab) {
		tabs_content[get_index(tab)].classList.add("is-active");
	};

	let get_index = function(el) {
		return [...el.parentElement.children].indexOf(el);
	};

	tabs.forEach(function(tab) {
		tab.addEventListener("click", function() {
			deactvate_all_tabs();
			hide_tabs_content();
			tab.classList.add("is-active");
			activate_tabs_content(tab);
		});
	});

	tabs[0].click();
}

function patreon() {
	fetch("https://api.ptkdev.io/backers/").then(function(response) {
		var content_type = response.headers.get("content-type");
		if (response.status === 200 && content_type && content_type.includes("application/json")) {
			return response.json();
		}
	}).then(function(json) {
		if (typeof json !== "undefined") {
			let html = "";
			for (let i = 0; i < json.length; i++) {
				html += `<a href="${json[i].url}"  rel="nofollow external noopener noreferrer" target="_new"><img src="${json[i].pic}" alt="Backer" class="patreon-backer" /></a>`;
			}
			dom.id("#patreon-backers").innerHTML = html;
		}

	});
}

function settings_init() {
	let checkboxs = ["fullscreen", "youtube", "netflix", "primevideo", "dailymotion", "twitch", "vimeo", "vvvvid", "crunchyroll"];

	chrome.storage.local.get(checkboxs, function(data) {
		data.fullscreen == null ? chrome.storage.local.set({"fullscreen": true}) : null;
		data.youtube == null ? chrome.storage.local.set({"youtube": false}) : null;
		data.netflix == null ? chrome.storage.local.set({"netflix": false}) : null;
		data.primevideo == null ? chrome.storage.local.set({"primevideo": false}) : null;
		data.dailymotion == null ? chrome.storage.local.set({"dailymotion": false}) : null;
		data.twitch == null ? chrome.storage.local.set({"twitch": false}) : null;
		data.vimeo == null ? chrome.storage.local.set({"vimeo": false}) : null;
		data.vvvvid == null ? chrome.storage.local.set({"vvvvid": false}) : null;
		data.crunchyroll == null ? chrome.storage.local.set({"crunchyroll": false}) : null;

		chrome.storage.local.get(checkboxs, function(data) {
			data.fullscreen == true ? dom.id(`#checkbox-fullscreen`).setAttribute("checked", "checked") : dom.id(`#checkbox-fullscreen`).removeAttribute("checked");
			data.youtube == true ? dom.id(`#checkbox-youtube`).setAttribute("checked", "checked") : dom.id(`#checkbox-youtube`).removeAttribute("checked");
			data.netflix == true ? dom.id(`#checkbox-netflix`).setAttribute("checked", "checked") : dom.id(`#checkbox-netflix`).removeAttribute("checked");
			data.primevideo == true ? dom.id(`#checkbox-primevideo`).setAttribute("checked", "checked") : dom.id(`#checkbox-primevideo`).removeAttribute("checked");
			data.dailymotion == true ? dom.id(`#checkbox-dailymotion`).setAttribute("checked", "checked") : dom.id(`#checkbox-dailymotion`).removeAttribute("checked");
			data.twitch == true ? dom.id(`#checkbox-twitch`).setAttribute("checked", "checked") : dom.id(`#checkbox-twitch`).removeAttribute("checked");
			data.vimeo == true ? dom.id(`#checkbox-vimeo`).setAttribute("checked", "checked") : dom.id(`#checkbox-vimeo`).removeAttribute("checked");
			data.vvvvid == true ? dom.id(`#checkbox-vvvvid`).setAttribute("checked", "checked") : dom.id(`#checkbox-vvvvid`).removeAttribute("checked");
			data.crunchyroll == true ? dom.id(`#checkbox-crunchyroll`).setAttribute("checked", "checked") : dom.id(`#checkbox-crunchyroll`).removeAttribute("checked");
		});
	});

	let aspect = ["aspect_x", "aspect_y"];

	chrome.storage.local.get(aspect, function(data) {
		data.aspect_x == null ? chrome.storage.local.set({"aspect_x": "1.33"}) : null;
		data.aspect_y == null ? chrome.storage.local.set({"aspect_y": "1"}) : null;

		chrome.storage.local.get(aspect, function(data) {
			dom.id(`#aspect_x`).setAttribute("value", data.aspect_x);
			dom.id(`#aspect_y`).setAttribute("value", data.aspect_y);
		});
	});

	let domains = ["domains"];

	chrome.storage.local.get(domains, function(data) {
		data.domains == null ? chrome.storage.local.set({"domains": ""}) : null;

		chrome.storage.local.get(domains, function(data) {
			dom.query(`#domains`)[0].setAttribute("value", data.domains);
			bulmaTagsinput.attach();
		});
	});
}

function settings_checkbox() {
	let checkboxs = dom.query("input[type='checkbox']");
	checkboxs.forEach(function(checkbox) {
		checkbox.addEventListener("click", function() {
			let obj_true = {}, obj_false = {};
			obj_true[this.getAttribute("id").replace("checkbox-", "")] = true;
			obj_false[this.getAttribute("id").replace("checkbox-", "")] = false;

			if (this.getAttribute("checked") === "checked") {
				this.removeAttribute("checked");
				chrome.storage.local.set(obj_false);
			} else {
				this.setAttribute("checked", "checked");
				chrome.storage.local.set(obj_true);
			}
		});
	});
}

function settings_aspect() {
	dom.query("#aspect_x")[0].addEventListener("change", function() {
		chrome.storage.local.set({"aspect_x": this.value});
	});

	dom.query("#aspect_y")[0].addEventListener("change", function() {
		chrome.storage.local.set({"aspect_y": this.value});
	});

	dom.query("#stretch")[0].addEventListener("click", function() {
		dom.id("#aspect_x").value = "1.33";
		dom.id("#aspect_y").value = "1";

		chrome.storage.local.set({"aspect_x": "1.33"});
		chrome.storage.local.set({"aspect_y": "1"});
	});

	dom.query("#crop")[0].addEventListener("click", function() {
		dom.id("#aspect_y").value = dom.id("#aspect_x").value;

		chrome.storage.local.set({"aspect_y": dom.id("#aspect_x").value});
	});
}

function settings_domains() {
	dom.query("#domains")[0].addEventListener("change", function() {
		chrome.storage.local.set({"domains": this.value});
	});
}

function translations() {
	dom.query("[lang-type='text']").forEach(function(element) {
		element.innerHTML = chrome.i18n.getMessage(element.getAttribute("lang"));
	});

	dom.query("[lang-type='placeholder']").forEach(function(element) {
		element.setAttribute("placeholder", chrome.i18n.getMessage("settings_domains_placeholder"));
	});
}

document.addEventListener("DOMContentLoaded", () => {
	tabs();
	patreon();
	settings_init();
	settings_checkbox();
	settings_aspect();
	settings_domains();
	translations();
});