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
bulmaTagsinput.attach();

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

document.addEventListener("DOMContentLoaded", () => {
	tabs();
	patreon();
});